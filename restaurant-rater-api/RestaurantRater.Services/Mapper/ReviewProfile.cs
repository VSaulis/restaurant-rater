using AutoMapper;
using RestaurantRater.Contracts.Review;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Review;

namespace RestaurantRater.Services.Mapper
{
    public class ReviewProfile : Profile
    {
        public ReviewProfile()
        {
            CreateMap<ListReviewsRequest, ReviewsFilter>();
            CreateMap<AddReviewRequest, Review>();
            CreateMap<Review, ReviewDto>();
            CreateMap<Review, ReviewsListItemDto>();
        }
    }
}