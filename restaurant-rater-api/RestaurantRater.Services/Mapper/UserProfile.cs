using AutoMapper;
using RestaurantRater.Contracts.User;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.User;

namespace RestaurantRater.Services.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<ListUsersRequest, UsersFilter>();
            CreateMap<User, UserDto>();
            CreateMap<User, UsersListItemDto>();
        }
    }
}