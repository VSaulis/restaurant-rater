using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Internal;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Profile;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Profile;

namespace RestaurantRater.Services
{
    public class ProfileService : IProfileService
    {
        private readonly IUserRepository _userRepository;
        private readonly HttpContext _httpContext;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        
        public ProfileService
        (
            IUnitOfWork unitOfWork,
            IUserRepository userRepository,
            IHttpContextAccessor httpContextAccessor,
            IMapper mapper
        )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _httpContext = httpContextAccessor.HttpContext;
            _userRepository = userRepository;
        }
        
        public async Task<ResultResponse<ProfileDto>> EditAsync(EditProfileRequest request)
        {
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            
            loggedUser.Email = request.Email;
            loggedUser.FirstName = request.FirstName;
            loggedUser.LastName = request.LastName;
            
            _userRepository.Update(loggedUser);
            await _unitOfWork.SaveChangesAsync();
            
            var profileDto = _mapper.Map<User, ProfileDto>(loggedUser);
            return new ResultResponse<ProfileDto>(profileDto);
        }

        public async Task<ResultResponse<ProfileDto>> GetAsync()
        {
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            var profileDto = _mapper.Map<User, ProfileDto>(loggedUser);
            return new ResultResponse<ProfileDto>(profileDto);
        }
    }
}