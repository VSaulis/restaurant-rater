using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class ReviewRepository : BaseRepository<Review, ReviewsFilter>, IReviewRepository
    {
        public ReviewRepository(SqlContext context) : base(context)
        {
        }

        public async Task<Review> GetRestaurantUserReviewAsync(int id, int restaurantId)
        {
            return await GetAsync(review => review.CreatedById == id && review.RestaurantId == restaurantId);
        }

        protected override IQueryable<Review> FormatQuery(IQueryable<Review> query)
        {
            return query.Include(review => review.CreatedBy);
        }
    }
}