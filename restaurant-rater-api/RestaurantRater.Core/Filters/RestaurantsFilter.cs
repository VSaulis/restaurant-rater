using System.Collections.Generic;

namespace RestaurantRater.Core.Filters
{
    public class RestaurantsFilter : BaseFilter
    {
        public List<int> CategoriesIds { get; set; }
        public int? LowestRating { get; set; }
        public int? HighestRating { get; set; }
        public int? CreatedById { get; set; }
    }
}