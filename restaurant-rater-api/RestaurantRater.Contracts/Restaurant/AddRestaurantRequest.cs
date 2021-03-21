using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Contracts.Restaurant
{
    public class AddRestaurantRequest : BaseRequest
    {
        [Required]
        public string Title { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public int CategoryId { get; set; }
    }
}