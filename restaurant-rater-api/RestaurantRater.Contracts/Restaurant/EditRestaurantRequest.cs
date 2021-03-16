using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Contracts.Restaurant
{
    public class EditRestaurantRequest : BaseRequest
    {
        [Required]
        public string Title { get; set; }
        
        [Required]
        public string Description { get; set; }
    }
}