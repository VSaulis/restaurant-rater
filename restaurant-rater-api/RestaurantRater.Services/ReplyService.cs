using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Reply;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Reply;

namespace RestaurantRater.Services
{
    public class ReplyService : IReplyService
    {
        private readonly IReplyRepository _replyRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ReplyService(IReplyRepository replyRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _replyRepository = replyRepository;
        }
        
        public async Task<ListResponse<RepliesListItemDto>> ListAsync(ListRepliesRequest request)
        {
            var filter = _mapper.Map<ListRepliesRequest, RepliesFilter>(request);
            var sort = _mapper.Map<ListRepliesRequest, Sort>(request);
            var paging = _mapper.Map<ListRepliesRequest, Paging>(request);

            var replies = await _replyRepository.GetListAsync(filter, sort, paging);
            var repliesCount = await _replyRepository.CountAsync(filter);

            var repliesDtosList = _mapper.Map<List<Reply>, List<RepliesListItemDto>>(replies);
            return new ListResponse<RepliesListItemDto>(repliesDtosList, repliesCount);
        }

        public async Task<ResultResponse<ReplyDto>> GetAsync(int id)
        {
            var reply = await _replyRepository.GetByIdAsync(id);
            if (reply == null) return new ResultResponse<ReplyDto>("Reply is not found");

            var replyDto = _mapper.Map<Reply, ReplyDto>(reply);
            return new ResultResponse<ReplyDto>(replyDto);
        }

        public async Task<BaseResponse> AddAsync(AddReplyRequest request)
        {
            var reply = _mapper.Map<AddReplyRequest, Reply>(request);
            await _replyRepository.AddAsync(reply);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> EditAsync(EditReplyRequest request)
        {
            var reply = await _replyRepository.GetByIdAsync(request.Id);
            if (reply == null) return new BaseResponse("Reply is not found");
            
            _replyRepository.Update(reply);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> DeleteAsync(int id)
        {
            var reply = await _replyRepository.GetByIdAsync(id);
            if (reply == null) return new BaseResponse("Reply is not found");

            _replyRepository.Delete(reply);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }
    }
}