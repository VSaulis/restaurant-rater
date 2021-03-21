namespace RestaurantRater.Contracts.Profile
{
    public class EditProfileRequest : BaseRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}