using System.Collections.Generic;
using RestaurantRater.Dtos.User;

namespace RestaurantRater.Dtos.Authentication
{
    public class LoggedUserDto
    {
        public UserDto User { get; set; }
        public string RefreshToken { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public List<string> Permissions { get; set; }
    }
}