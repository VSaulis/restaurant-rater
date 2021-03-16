namespace RestaurantRater.Core.Services
{
    public interface ITokenService
    {
        string GenerateRefreshToken();
        string GenerateToken(int id);
    }
}