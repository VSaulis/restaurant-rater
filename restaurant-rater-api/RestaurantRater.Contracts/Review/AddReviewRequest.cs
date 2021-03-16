using System;
using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Contracts.Review
{
    public class AddReviewRequest : BaseRequest
    {
        [Required]
        public DateTime Visited { get; set; }
        
        [Required]
        public string Comment { get; set; }
        
        [Required]
        public int RestaurantId { get; set; }
        
        [Required]
        public int Rating { get; set; }
    }
}