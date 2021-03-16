using System;
using System.Linq;
using System.Security.Cryptography;
using RestaurantRater.Core.Services;

namespace RestaurantRater.Services
{
    public class EncryptionService : IEncryptionService
    {
        private const int SaltLength = 16;
        private const int IterationsCount = 1000;
        private const int HashLength = 32;
        
        public byte[] CreateSalt()
        {
            var randomHash = new byte[SaltLength];
            var cryptoServiceProvider = new RNGCryptoServiceProvider();
            cryptoServiceProvider.GetBytes(randomHash);
            return randomHash;
        }

        public byte[] CreateHash(string text, byte[] salt)
        {
            var hashedText = new Rfc2898DeriveBytes(text, salt, IterationsCount);
            return hashedText.GetBytes(HashLength);
        }

        public bool VerifyHash(string text, byte[] hash, byte[] salt)
        {
            var hashedText = new Rfc2898DeriveBytes(text, salt, IterationsCount).GetBytes(HashLength);
            return hashedText.SequenceEqual(hash);
        }

        public int CreateCode()
        {
            var random = new Random();
            return random.Next(0, 1000000);
        }
    }
}