using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.User;
using RestaurantRater.Dtos.User;

namespace RestaurantRater.Core.Services
{
    public interface IUserService
    {
        Task<ListResponse<UsersListItemDto>> ListAsync(ListUsersRequest request);
        Task<ResultResponse<UserDto>> GetAsync(int id);
        Task<BaseResponse> EditAsync(int id, EditUserRequest request);
        Task<BaseResponse> DeleteAsync(int id);
    }
}