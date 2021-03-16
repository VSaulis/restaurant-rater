using System.ComponentModel.DataAnnotations;
using RestaurantRater.Constants.Enums;

namespace RestaurantRater.Contracts.Authentication
{
    public class RegisterRequest : BaseRequest
    {
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }

        [Required]
        public string Password { get; set; }
        
        [Required]
        public UserRoles Role { get; set; }
    }
}