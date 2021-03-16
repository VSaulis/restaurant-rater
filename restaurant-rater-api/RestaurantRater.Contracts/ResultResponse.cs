namespace RestaurantRater.Contracts
{
    public class ResultResponse<T> : BaseResponse
    {
        public ResultResponse(string message)
        {
            IsValid = false;
            Message = message;
        }

        public ResultResponse(T result)
        {
            Result = result;
        }

        public T Result { get; set; }
    }
}