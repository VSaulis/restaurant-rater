using System;
using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Core.Models
{
    public class BaseModel
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public DateTime Created { get; set; }
        
        public DateTime? Updated { get; set; }
    }
}