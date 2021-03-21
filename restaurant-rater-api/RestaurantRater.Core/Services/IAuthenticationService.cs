using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Authentication;
using RestaurantRater.Dtos.Authentication;

namespace RestaurantRater.Core.Services
{
    public interface IAuthenticationService
    {
        Task<ResultResponse<LoggedUserDto>> LoginAsync(LoginRequest request);
        Task<ResultResponse<LoggedUserDto>> RegisterAsync(RegisterRequest request);
        Task<BaseResponse> DeleteAsync();
        Task<BaseResponse> ChangePasswordAsync(ChangePasswordRequest request);
        Task<ResultResponse<LoggedUserDto>> GetLoggedUserAsync();
    }
}