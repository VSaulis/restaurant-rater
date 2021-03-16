using System.Threading.Tasks;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Core.Repositories
{
    public interface IUserRepository : IBaseRepository<User, BaseFilter>
    {
        Task<User> GetByEmailAsync(string email);
    }
}