using System;
using System.Linq;
using AutoMapper;
using RestaurantRater.Contracts.Restaurant;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Restaurant;

namespace RestaurantRater.Services.Mapper
{
    public class RestaurantProfile : Profile
    {
        public RestaurantProfile()
        {
            CreateMap<ListRestaurantsRequest, RestaurantsFilter>();
            CreateMap<AddRestaurantRequest, Restaurant>();
            
            CreateMap<Restaurant, RestaurantDto>()
                .ForMember(
                    dest => dest.AverageRating,
                    opt => opt.MapFrom(src => Math.Round(src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Average(), 2))
                )
                .ForMember(
                    dest => dest.HighestRating,
                    opt => opt.MapFrom(src => src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Max())
                )
                .ForMember(
                    dest => dest.LowestRating,
                    opt => opt.MapFrom(src => src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Min())
                )
                .ForMember(
                    dest => dest.ReviewsCount,
                    opt => opt.MapFrom(src => src.Reviews.Count)
                );
            
            CreateMap<Restaurant, RestaurantsListItemDto>()
                .ForMember(
                    dest => dest.AverageRating,
                    opt => opt.MapFrom(src => Math.Round(src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Average(), 2))
                )
                .ForMember(
                    dest => dest.HighestRating,
                    opt => opt.MapFrom(src => src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Max())
                )
                .ForMember(
                    dest => dest.LowestRating,
                    opt => opt.MapFrom(src => src.Reviews.Select(review => review.Rating).DefaultIfEmpty().Min())
                )
                .ForMember(
                    dest => dest.ReviewsCount,
                    opt => opt.MapFrom(src => src.Reviews.Count)
                );
        }
    }
}