using System.Threading.Tasks;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly SqlContext _context;
        
        public UnitOfWork(SqlContext context)
        {
            _context = context;
        }
        
        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}