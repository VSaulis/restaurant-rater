using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Reply;
using RestaurantRater.Dtos.Reply;

namespace RestaurantRater.Core.Services
{
    public interface IReplyService
    {
        Task<ListResponse<RepliesListItemDto>> ListAsync(ListRepliesRequest request);
        Task<ResultResponse<ReplyDto>> GetAsync(int id);
        Task<BaseResponse> AddAsync(AddReplyRequest request);
        Task<BaseResponse> EditAsync(int id, EditReplyRequest request);
        Task<BaseResponse> DeleteAsync(int id);
    }
}