using System.Linq;
using Microsoft.EntityFrameworkCore;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class RestaurantRepository : BaseRepository<Restaurant, RestaurantsFilter>, IRestaurantRepository
    {
        public RestaurantRepository(SqlContext context) : base(context)
        {
        }

        protected override IQueryable<Restaurant> ApplyFilter(IQueryable<Restaurant> query, RestaurantsFilter filter)
        {
            if (filter.CreatedById.HasValue)
            {
                query = query.Where(restaurant => restaurant.CreatedById == filter.CreatedById);
            }
            
            if (filter.LowestRating.HasValue)
            {
                query = query.Where(restaurant => restaurant.Reviews.Average(review => review.Rating) >= filter.LowestRating.Value);
            }

            return query;
        }

        protected override IQueryable<Restaurant> FormatQuery(IQueryable<Restaurant> query)
        {
            return query
                .Include(restaurant => restaurant.CreatedBy)
                .Include(restaurant => restaurant.Reviews)
                .ThenInclude(review => review.CreatedBy);
        }
    }
}