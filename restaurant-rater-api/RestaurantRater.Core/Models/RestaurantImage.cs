using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Core.Models
{
    public class RestaurantImage : BaseModel
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public long Size { get; set; }
        
        [Required]
        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
    }
}