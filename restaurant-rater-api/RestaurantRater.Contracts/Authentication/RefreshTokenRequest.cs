namespace RestaurantRater.Contracts.Authentication
{
    public class RefreshTokenRequest : BaseRequest
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}