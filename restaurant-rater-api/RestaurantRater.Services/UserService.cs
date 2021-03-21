using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.User;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.User;

namespace RestaurantRater.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        
        public async Task<ListResponse<UsersListItemDto>> ListAsync(ListUsersRequest request)
        {
            var filter = _mapper.Map<ListUsersRequest, UsersFilter>(request);
            var sort = _mapper.Map<ListUsersRequest, Sort>(request);
            var paging = _mapper.Map<ListUsersRequest, Paging>(request);

            var users = await _userRepository.GetListAsync(filter, sort, paging);
            var usersCount = await _userRepository.CountAsync(filter);

            var usersDtosList = _mapper.Map<List<User>, List<UsersListItemDto>>(users);
            return new ListResponse<UsersListItemDto>(usersDtosList, usersCount);
        }

        public async Task<ResultResponse<UserDto>> GetAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return new ResultResponse<UserDto>("User is not found");

            var userDto = _mapper.Map<User, UserDto>(user);
            return new ResultResponse<UserDto>(userDto);
        }

        public async Task<BaseResponse> EditAsync(int id, EditUserRequest request)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return new BaseResponse("User is not found");
            
            user.Email = request.Email;
            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            _userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> DeleteAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return new BaseResponse("User is not found");

            _userRepository.Delete(user);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }
    }
}