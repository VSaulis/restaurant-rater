using AutoMapper;
using RestaurantRater.Contracts;
using RestaurantRater.Core.Filters;

namespace RestaurantRater.Services.Mapper
{
    public class BaseProfile : Profile
    {
        public BaseProfile()
        {
            CreateMap<ListRequest, Paging>();
            CreateMap<ListRequest, Sort>();
            CreateMap<ListRequest, BaseFilter>();
        }
    }
}