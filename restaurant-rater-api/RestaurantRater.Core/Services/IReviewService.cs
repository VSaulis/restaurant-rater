using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Review;
using RestaurantRater.Dtos.Review;

namespace RestaurantRater.Core.Services
{
    public interface IReviewService
    {
        Task<ListResponse<ReviewsListItemDto>> ListAsync(ListReviewsRequest request);
        Task<ResultResponse<ReviewDto>> GetAsync(int id);
        Task<BaseResponse> AddAsync(AddReviewRequest request);
        Task<BaseResponse> EditAsync(int id, EditReviewRequest request);
        Task<BaseResponse> DeleteAsync(int id);
    }
}