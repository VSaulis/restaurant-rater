using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Restaurant;
using RestaurantRater.Dtos.Restaurant;

namespace RestaurantRater.Core.Services
{
    public interface IRestaurantService
    {
        Task<ListResponse<RestaurantsListItemDto>> ListAsync(ListRestaurantsRequest request);
        Task<ResultResponse<RestaurantDto>> GetAsync(int id);
        Task<BaseResponse> AddAsync(AddRestaurantRequest request);
        Task<BaseResponse> EditAsync(int id, EditRestaurantRequest request);
        Task<BaseResponse> DeleteAsync(int id);
    }
}