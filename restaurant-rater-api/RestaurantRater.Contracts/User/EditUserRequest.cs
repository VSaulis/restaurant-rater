namespace RestaurantRater.Contracts.User
{
    public class EditUserRequest : BaseRequest
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}