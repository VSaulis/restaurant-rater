using System.Threading.Tasks;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Core.Repositories
{
    public interface IReviewRepository : IBaseRepository<Review, ReviewsFilter>
    {
        Task<Review> GetRestaurantUserReviewAsync(int id, int restaurantId);
    }
}