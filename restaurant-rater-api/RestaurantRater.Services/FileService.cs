using System;
using System.Threading.Tasks;
using RestaurantRater.Core.Services;

namespace RestaurantRater.Services
{
    public class FileService : IFileService
    {
        public async Task<Tuple<string, long>> UploadFileAsync()
        {
            return await Task.FromResult(new Tuple<string, long>("test", 12));
        }
    }
}