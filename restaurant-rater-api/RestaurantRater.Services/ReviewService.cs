using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Internal;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Review;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Review;

namespace RestaurantRater.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly User _loggedUser;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ReviewService
        (
            IReviewRepository reviewRepository,
            IMapper mapper,
            IUnitOfWork unitOfWork,
            IHttpContextAccessor httpContextAccessor
        )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _loggedUser = (User) httpContextAccessor.HttpContext.Items.GetOrDefault("User");
            _reviewRepository = reviewRepository;
        }

        public async Task<ListResponse<ReviewsListItemDto>> ListAsync(ListReviewsRequest request)
        {
            var filter = _mapper.Map<ListReviewsRequest, ReviewsFilter>(request);
            var sort = _mapper.Map<ListReviewsRequest, Sort>(request);
            var paging = _mapper.Map<ListReviewsRequest, Paging>(request);

            var reviews = await _reviewRepository.GetListAsync(filter, sort, paging);
            var reviewsCount = await _reviewRepository.CountAsync(filter);

            var reviewsDtosList = _mapper.Map<List<Review>, List<ReviewsListItemDto>>(reviews);
            return new ListResponse<ReviewsListItemDto>(reviewsDtosList, reviewsCount);
        }

        public async Task<ResultResponse<ReviewDto>> GetAsync(int id)
        {
            var review = await _reviewRepository.GetByIdAsync(id);
            if (review == null) return new ResultResponse<ReviewDto>("Review is not found");

            var reviewDto = _mapper.Map<Review, ReviewDto>(review);
            return new ResultResponse<ReviewDto>(reviewDto);
        }

        public async Task<BaseResponse> AddAsync(AddReviewRequest request)
        {
            var userReview = await _reviewRepository.GetRestaurantUserReviewAsync(_loggedUser.Id, request.RestaurantId);
            if (userReview != null) return new BaseResponse("Review is already added");
            
            var review = _mapper.Map<AddReviewRequest, Review>(request);
            review.CreatedById = _loggedUser.Id;
            
            await _reviewRepository.AddAsync(review);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> EditAsync(EditReviewRequest request)
        {
            var review = await _reviewRepository.GetByIdAsync(request.Id);
            if (review == null) return new BaseResponse("Review is not found");

            _reviewRepository.Update(review);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> DeleteAsync(int id)
        {
            var review = await _reviewRepository.GetByIdAsync(id);
            if (review == null) return new BaseResponse("Review is not found");

            _reviewRepository.Delete(review);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }
    }
}