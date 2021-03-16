using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Core.Repositories
{
    public interface IRestaurantRepository : IBaseRepository<Restaurant, RestaurantsFilter>
    {
    }
}