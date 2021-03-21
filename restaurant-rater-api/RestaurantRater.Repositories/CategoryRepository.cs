using System.Linq;
using Microsoft.EntityFrameworkCore;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class CategoryRepository : BaseRepository<Category, CategoriesFilter>, ICategoryRepository
    {
        public CategoryRepository(SqlContext context) : base(context)
        {
        }

        protected override IQueryable<Category> FormatQuery(IQueryable<Category> query)
        {
            return query.Include(category => category.Restaurants);
        }
    }
}