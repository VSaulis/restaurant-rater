using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RestaurantRater.Core.Services;

namespace RestaurantRater.Services
{
    public class TokenService : ITokenService
    {
        private const int RefreshTokenLength = 32;
        private readonly string _secret;
        private readonly int _expirationTimeInSeconds;
        private readonly string _issuer;

        public TokenService(IConfiguration configuration)
        {
            _secret = configuration["Jwt:Secret"];
            _expirationTimeInSeconds = int.Parse(configuration["Jwt:ExpirationTimeInSeconds"]);
            _issuer = configuration["Jwt:Issuer"];
        }

        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[RefreshTokenLength];
            var randomNumberGenerator = RandomNumberGenerator.Create();
            randomNumberGenerator.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        public string GenerateToken(int id)
        {
            var claims = new[] {new Claim("Id", id.ToString())};
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secret));
            var credentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _issuer,
                _issuer,
                claims,
                expires: DateTime.Now.AddSeconds(_expirationTimeInSeconds),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}