using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Core.Repositories;

namespace RestaurantRater.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _requestDelegate;

        public JwtMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate;
        }
        
        public async Task Invoke(HttpContext httpContext, IUserRepository userRepository)
        {
            await AttachUserToContext(httpContext, userRepository);
            await _requestDelegate(httpContext);
        }

        private static async Task AttachUserToContext(HttpContext httpContext, IUserRepository userRepository)
        {
            if (!httpContext.User.Identity.IsAuthenticated) return;
            
            var id = httpContext.User.Claims.FirstOrDefault(claim => claim.Type == "Id")?.Value;
            if (id == null) return;
            
            var user = await userRepository.GetByIdAsync(int.Parse(id));
            if (user == null) return;
            
            httpContext.Items.Add("User", user);
        }
    }
}