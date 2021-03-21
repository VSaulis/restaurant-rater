using System.Threading.Tasks;
using AutoMapper.Internal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Services;
using RestaurantRater.System.Attributes;

namespace RestaurantRater.Authorization
{
    public class PermissionRequirementHandler : AuthorizationHandler<PermissionRequirement>
    {
        private readonly IPermissionsService _permissionsService;
        private readonly HttpContext _httpContext;

        public PermissionRequirementHandler(IPermissionsService permissionsService, IHttpContextAccessor httpContextAccessor)
        {
            _permissionsService = permissionsService;
            _httpContext = httpContextAccessor.HttpContext;
        }
        
        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionRequirement requirement)
        {
            var user = (User) _httpContext.Items.GetOrDefault("User");
           
            if (user != null)
            {
                var permissions = _permissionsService.GetPermissions(user.Role);
                if (permissions.Contains(requirement.Permission)) context.Succeed(requirement);
            }
        }
    }
}