using System.ComponentModel.DataAnnotations;
using RestaurantRater.Constants.Enums;

namespace RestaurantRater.Contracts
{
    public class ListRequest : BaseRequest
    {
        [Required]
        public int Limit { get; set; }
        
        [Required]
        public int Offset { get; set; }
        
        public string SortColumn { get; set; }
        public SortTypes? SortType { get; set; }
    }
}