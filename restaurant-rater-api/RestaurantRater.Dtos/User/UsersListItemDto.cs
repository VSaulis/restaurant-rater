namespace RestaurantRater.Dtos.User
{
    public class UsersListItemDto : BaseDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}