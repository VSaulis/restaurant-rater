using System.Threading.Tasks;

namespace RestaurantRater.Core.Repositories
{
    public interface IUnitOfWork
    {
        Task SaveChangesAsync();
    }
}