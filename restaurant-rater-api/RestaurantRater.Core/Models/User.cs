using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using RestaurantRater.Constants.Enums;

namespace RestaurantRater.Core.Models
{
    public class User : BaseModel
    {
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }
        
        [Required]
        public byte[] PasswordHash { get; set; }
        
        [Required]
        public UserRoles Role { get; set; }
        
        [Required]
        public UserStatuses Status { get; set; }
        
        public string RefreshToken { get; set; }
        
        public List<Restaurant> Restaurants { get; set; }
        public List<Review> Reviews { get; set; }
        public List<Reply> Replies { get; set; }
    }
}