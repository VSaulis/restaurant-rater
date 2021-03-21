using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Category;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Category;

namespace RestaurantRater.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _categoryRepository = categoryRepository;
        }
        
        public async Task<ListResponse<CategoriesListItemDto>> ListAsync(ListCategoriesRequest request)
        {
            var filter = _mapper.Map<ListCategoriesRequest, CategoriesFilter>(request);
            var sort = _mapper.Map<ListCategoriesRequest, Sort>(request);
            var paging = _mapper.Map<ListCategoriesRequest, Paging>(request);

            var categories = await _categoryRepository.GetListAsync(filter, sort, paging);
            var categoriesCount = await _categoryRepository.CountAsync(filter);

            var categoriesDtosList = _mapper.Map<List<Category>, List<CategoriesListItemDto>>(categories);
            return new ListResponse<CategoriesListItemDto>(categoriesDtosList, categoriesCount);
        }

        public async Task<ResultResponse<CategoryDto>> GetAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) return new ResultResponse<CategoryDto>("Category is not found");

            var categoryDto = _mapper.Map<Category, CategoryDto>(category);
            return new ResultResponse<CategoryDto>(categoryDto);
        }

        public async Task<BaseResponse> AddAsync(AddCategoryRequest request)
        {
            var category = _mapper.Map<AddCategoryRequest, Category>(request);
            await _categoryRepository.AddAsync(category);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> EditAsync(int id, EditCategoryRequest request)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) return new BaseResponse("Category is not found");

            category.Name = request.Name;
            _categoryRepository.Update(category);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> DeleteAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) return new BaseResponse("Category is not found");

            _categoryRepository.Delete(category);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }
    }
}