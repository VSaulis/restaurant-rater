using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Core.Repositories
{
    public interface ICategoryRepository : IBaseRepository<Category, CategoriesFilter>
    {
    }
}