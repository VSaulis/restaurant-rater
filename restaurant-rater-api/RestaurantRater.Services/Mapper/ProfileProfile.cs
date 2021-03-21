using AutoMapper;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Profile;

namespace RestaurantRater.Services.Mapper
{
    public class ProfileProfile : Profile
    {
        public ProfileProfile()
        {
            CreateMap<User, ProfileDto>();
        }
    }
}