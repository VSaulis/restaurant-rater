namespace RestaurantRater.Contracts.Restaurant
{
    public class ListRestaurantsRequest : ListRequest
    {
        public int? LowestRating { get; set; }
        public int? CreatedById { get; set; }
    }
}