namespace RestaurantRater.Contracts
{
    public class IdRequest<T> : BaseRequest
    {
        public T Id { get; set; }
    }
}