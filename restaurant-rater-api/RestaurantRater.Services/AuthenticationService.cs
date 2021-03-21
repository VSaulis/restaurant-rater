using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Internal;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Constants.Enums;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Authentication;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Authentication;
using NotImplementedException = System.NotImplementedException;

namespace RestaurantRater.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IUserRepository _userRepository;
        private readonly IEncryptionService _encryptionService;
        private readonly ITokenService _tokenService;
        private readonly HttpContext _httpContext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        
        public AuthenticationService
        (
            IUnitOfWork unitOfWork,
            IUserRepository userRepository,
            IEncryptionService encryptionService,
            ITokenService tokenService,
            IHttpContextAccessor httpContextAccessor,
            IMapper mapper
        )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _httpContext = httpContextAccessor.HttpContext;
            _tokenService = tokenService;
            _encryptionService = encryptionService;
            _userRepository = userRepository;
        }
        
        public async Task<ResultResponse<LoggedUserDto>> LoginAsync(LoginRequest request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user == null) return new ResultResponse<LoggedUserDto>("User is not found");

            if (!_encryptionService.VerifyHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return new ResultResponse<LoggedUserDto>("Invalid credentials");
            }

            user.RefreshToken = _tokenService.GenerateRefreshToken();
            _userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();

            var token = _tokenService.GenerateToken(user.Email);
            var loggedUserDto = _mapper.Map<User, LoggedUserDto>(user);
            loggedUserDto.Token = token;
            return new ResultResponse<LoggedUserDto>(loggedUserDto);
        }

        public async Task<ResultResponse<LoggedUserDto>> RegisterAsync(RegisterRequest request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user != null) return new ResultResponse<LoggedUserDto>("User with this email is already exist");
            
            var passwordSalt = _encryptionService.CreateSalt();
            var passwordHash = _encryptionService.CreateHash(request.Password, passwordSalt);
                
            user = new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Status = UserStatuses.Verified,
                Role = request.Role,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                RefreshToken = _tokenService.GenerateRefreshToken()
            };
                
            await _userRepository.AddAsync(user);
            await _unitOfWork.SaveChangesAsync();
            
            var token = _tokenService.GenerateToken(user.Email);
            var loggedUserDto = _mapper.Map<User, LoggedUserDto>(user);
            loggedUserDto.Token = token;
            return new ResultResponse<LoggedUserDto>(loggedUserDto);
        }

        public async Task<BaseResponse> DeleteAsync()
        {
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            _userRepository.Delete(loggedUser);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> ChangePasswordAsync(ChangePasswordRequest request)
        {
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            
            if (!_encryptionService.VerifyHash(request.CurrentPassword, loggedUser.PasswordHash, loggedUser.PasswordSalt))
            {
                return new BaseResponse("Password is invalid");
            }
            
            var passwordSalt = _encryptionService.CreateSalt();
            var passwordHash = _encryptionService.CreateHash(request.NewPassword, passwordSalt);

            loggedUser.PasswordHash = passwordHash;
            loggedUser.PasswordSalt = passwordSalt;
            _userRepository.Update(loggedUser);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<ResultResponse<LoggedUserDto>> GetLoggedUserAsync()
        {
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            var loggedUserDto = _mapper.Map<User, LoggedUserDto>(loggedUser);
            return new ResultResponse<LoggedUserDto>(loggedUserDto);
        }
    }
}