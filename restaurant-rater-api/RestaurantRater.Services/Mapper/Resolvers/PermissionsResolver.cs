using System.Collections.Generic;
using AutoMapper;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Services;

namespace RestaurantRater.Services.Mapper.Resolvers
{
    public class PermissionsResolver : IValueResolver<User, object, List<string>>
    {
        private readonly IPermissionsService _permissionsService;

        public PermissionsResolver(IPermissionsService permissionsService)
        {
            _permissionsService = permissionsService;
        }

        public List<string> Resolve(User user, object destination, List<string> destMember, ResolutionContext context)
        {
            return _permissionsService.GetPermissions(user.Role);
        }
    }
}