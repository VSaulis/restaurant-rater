using System;
using RestaurantRater.Dtos.User;

namespace RestaurantRater.Dtos.Review
{
    public class ReviewsListItemDto : BaseDto
    {
        public UserDto CreatedBy { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime Visited { get; set; }
    }
}