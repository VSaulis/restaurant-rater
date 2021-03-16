using System.Collections.Generic;
using RestaurantRater.Constants.Enums;

namespace RestaurantRater.Core.Services
{
    public interface IPermissionsService
    {
        List<string> GetPermissions(UserRoles role);
    }
}