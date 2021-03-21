using System.Collections.Generic;

namespace RestaurantRater.Core.Models
{
    public class Category : BaseModel
    {
        public string Name { get; set; }
        
        public List<Restaurant> Restaurants { get; set; }
    }
}