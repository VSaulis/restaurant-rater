namespace RestaurantRater.Core.Filters
{
    public class RestaurantsFilter : BaseFilter
    {
        public int? LowestRating { get; set; }
        public int? CreatedById { get; set; }
    }
}