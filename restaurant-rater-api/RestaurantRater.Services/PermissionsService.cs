using System.Collections.Generic;
using System.Linq;
using RestaurantRater.Constants.Constants;
using RestaurantRater.Constants.Enums;
using RestaurantRater.Core.Services;

namespace RestaurantRater.Services
{
    public class PermissionsService : IPermissionsService
    {
        public List<string> GetPermissions(UserRoles role)
        {
            var permissions = new List<string>();

            if (role == UserRoles.Admin)
            {
                // Users
                permissions.Add(Permissions.Users.Create);
                permissions.Add(Permissions.Users.Edit);
                permissions.Add(Permissions.Users.View);
                permissions.Add(Permissions.Users.Delete);
                // Categories
                permissions.Add(Permissions.Categories.Create);
                permissions.Add(Permissions.Categories.Edit);
                permissions.Add(Permissions.Categories.View);
                permissions.Add(Permissions.Categories.Delete);
                // Reviews
                permissions.Add(Permissions.Reviews.Edit);
                permissions.Add(Permissions.Reviews.View);
                permissions.Add(Permissions.Reviews.Delete);
                // Restaurants
                permissions.Add(Permissions.Restaurants.Edit);
                permissions.Add(Permissions.Restaurants.View);
                permissions.Add(Permissions.Restaurants.Delete);
                // Replies
                permissions.Add(Permissions.Replies.Edit);
                permissions.Add(Permissions.Replies.View);
                permissions.Add(Permissions.Replies.Delete);
            }
                
            if (role == UserRoles.Owner)
            {
                // Reviews
                permissions.Add(Permissions.Reviews.View);
                // Restaurants
                permissions.Add(Permissions.Restaurants.Create);
                permissions.Add(Permissions.Restaurants.Edit);
                permissions.Add(Permissions.Restaurants.View);
                permissions.Add(Permissions.Restaurants.Delete);
                // Replies
                permissions.Add(Permissions.Replies.Create);
                permissions.Add(Permissions.Replies.Edit);
                permissions.Add(Permissions.Replies.View);
                permissions.Add(Permissions.Replies.Delete);
            }
            
            if (role == UserRoles.RegularUser)
            {
                // Reviews
                permissions.Add(Permissions.Reviews.Create);
                permissions.Add(Permissions.Reviews.Edit);
                permissions.Add(Permissions.Reviews.View);
                permissions.Add(Permissions.Reviews.Delete);
                // Categories
                permissions.Add(Permissions.Categories.Create);
                permissions.Add(Permissions.Categories.Edit);
                permissions.Add(Permissions.Categories.View);
                permissions.Add(Permissions.Categories.Delete);
                // Restaurants
                permissions.Add(Permissions.Restaurants.View);
                // Replies
                permissions.Add(Permissions.Replies.View);
            }

            return permissions.Distinct().ToList();
        }
    }
}