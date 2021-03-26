using System.Collections.Generic;
using RestaurantRater.Dtos.Review;

namespace RestaurantRater.Dtos.Restaurant
{
    public class RestaurantDto : BaseDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal AverageRating { get; set; }
        public decimal LowestRating { get; set; }
        public decimal HighestRating { get; set; }
        public int ReviewsCount { get; set; }
        public bool IsReviewed { get; set; }
        public List<ReviewsListItemDto> Reviews { get; set; }
    }
}