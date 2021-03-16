using System;

namespace RestaurantRater.Dtos.Review
{
    public class ReviewDto : BaseDto
    {
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime Visited { get; set; }
    }
}