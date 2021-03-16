using System.Collections.Generic;

namespace RestaurantRater.Contracts
{
    public class ListResponse<T> : ResultResponse<List<T>>
    {
        public ListResponse(string message) : base(message) { }

        public ListResponse(List<T> result, int count) : base(result)
        {
            Count = count;
        }

        public int Count { get; set; }
    }
}