using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

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
        
        public List<Review> Reviews { get; set; }

        public double AverageRating()
        {
            return Math.Round(Reviews.Select(review => review.Rating).DefaultIfEmpty().Average(), 2);
        }
    }
}