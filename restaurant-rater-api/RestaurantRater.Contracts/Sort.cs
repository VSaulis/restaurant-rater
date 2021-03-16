using RestaurantRater.Constants.Enums;

namespace RestaurantRater.Contracts
{
    public class Sort
    {
        public SortTypes Type { get; set; }
        public string Column { get; set; }
    }
}