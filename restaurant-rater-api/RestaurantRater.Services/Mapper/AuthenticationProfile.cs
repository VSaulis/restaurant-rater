using AutoMapper;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Authentication;
using RestaurantRater.Services.Mapper.Resolvers;

namespace RestaurantRater.Services.Mapper
{
    public class AuthenticationProfile : Profile
    {
        public AuthenticationProfile()
        {
            CreateMap<User, LoggedUserDto>()
                .ForMember(
                    dest => dest.User,
                    opt => opt.MapFrom(src => src)
                )
                .ForMember(
                    dest => dest.Permissions,
                    opt => opt.MapFrom<PermissionsResolver>()
                );

            CreateMap<LoggedUser, LoggedUserDto>();
        }
    }
}