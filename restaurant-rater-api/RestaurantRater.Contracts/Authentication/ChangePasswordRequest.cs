namespace RestaurantRater.Contracts.Authentication
{
    public class ChangePasswordRequest : BaseRequest
    {
        public string CurrentPassword { get; set; }
        public string Password { get; set; }
    }
}