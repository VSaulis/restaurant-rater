using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Core.Models
{
    public class Restaurant : BaseModel
    {
        [Required]
        public string Title { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; }
        
        public List<RestaurantImage> RestaurantImages { get; set; }
        public List<Review> Reviews { get; set; }
    }
}