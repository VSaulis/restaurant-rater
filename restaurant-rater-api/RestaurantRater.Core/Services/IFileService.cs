using System;
using System.Threading.Tasks;

namespace RestaurantRater.Core.Services
{
    public interface IFileService
    {
        Task<Tuple<string, long>> UploadFileAsync();
    }
}