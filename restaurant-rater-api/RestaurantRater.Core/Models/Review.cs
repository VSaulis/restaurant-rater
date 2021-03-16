using System;
using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Core.Models
{
    public class Review : BaseModel
    {
        [Required]
        public DateTime Visited { get; set; }
        
        [Required]
        public string Comment { get; set; }
        
        [Required]
        public int Rating { get; set; }

        [Required]
        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }

        [Required]
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; }
        
        public Reply Reply { get; set; }
    }
}