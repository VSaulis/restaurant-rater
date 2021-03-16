using System;

namespace RestaurantRater.Dtos.Review
{
    public class ReviewsListItemDto : BaseDto
    {
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime Visited { get; set; }
    }
}