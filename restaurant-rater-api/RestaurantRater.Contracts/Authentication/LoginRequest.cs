using System.ComponentModel.DataAnnotations;

namespace RestaurantRater.Contracts.Authentication
{
    public class LoginRequest : BaseRequest
    {
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}