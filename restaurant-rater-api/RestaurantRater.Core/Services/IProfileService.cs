using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Profile;
using RestaurantRater.Dtos.Profile;

namespace RestaurantRater.Core.Services
{
    public interface IProfileService
    {
        Task<ResultResponse<ProfileDto>> EditAsync(EditProfileRequest request);
        Task<ResultResponse<ProfileDto>> GetAsync();
    }
}