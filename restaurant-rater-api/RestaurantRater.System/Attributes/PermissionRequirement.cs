using Microsoft.AspNetCore.Authorization;

namespace RestaurantRater.System.Attributes
{
    public class PermissionRequirement :  IAuthorizationRequirement
    {
        public readonly string Permission;
        
        public PermissionRequirement(string permission)
        {
            Permission = permission;
        }
    }
}