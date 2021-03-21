using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Category;
using RestaurantRater.Dtos.Category;

namespace RestaurantRater.Core.Services
{
    public interface ICategoryService
    {
        Task<ListResponse<CategoriesListItemDto>> ListAsync(ListCategoriesRequest request);
        Task<ResultResponse<CategoryDto>> GetAsync(int id);
        Task<BaseResponse> AddAsync(AddCategoryRequest request);
        Task<BaseResponse> EditAsync(int id, EditCategoryRequest request);
        Task<BaseResponse> DeleteAsync(int id);
    }
}