namespace RestaurantRater.Dtos.Restaurant
{
    public class RestaurantsListItemDto : BaseDto
    {
        public string Title { get; set; }
        public decimal AverageRating { get; set; }
        public decimal LowestRating { get; set; }
        public decimal HighestRating { get; set; }
        public int ReviewsCount { get; set; }
        public string Description { get; set; }
    }
}