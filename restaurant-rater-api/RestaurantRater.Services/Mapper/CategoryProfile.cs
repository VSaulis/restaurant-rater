using AutoMapper;
using RestaurantRater.Contracts.Category;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Category;

namespace RestaurantRater.Services.Mapper
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<ListCategoriesRequest, CategoriesFilter>();
            CreateMap<AddCategoryRequest, Category>();
            CreateMap<Category, CategoryDto>();

            CreateMap<Category, CategoriesListItemDto>()
                .ForMember(
                    dest => dest.RestaurantsCount,
                    opt => opt.MapFrom(src => src.Restaurants.Count)
                );
        }
    }
}