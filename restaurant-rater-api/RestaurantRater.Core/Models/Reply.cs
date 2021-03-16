using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Core.Models
{
    public class Reply : BaseModel
    {
        [Required]
        public int ReviewId { get; set; }
        public Review Review { get; set; }
        
        [Required]
        public string Comment { get; set; }
    }
}