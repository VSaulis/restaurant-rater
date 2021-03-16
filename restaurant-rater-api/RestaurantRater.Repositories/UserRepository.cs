using System.Threading.Tasks;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class UserRepository : BaseRepository<User, BaseFilter>, IUserRepository
    {
        public UserRepository(SqlContext context) : base(context)
        {
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            return await GetAsync(user => user.Email == email);
        }
    }
}