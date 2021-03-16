using AutoMapper;
using RestaurantRater.Contracts.Reply;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Dtos.Reply;

namespace RestaurantRater.Services.Mapper
{
    public class ReplyProfile : Profile
    {
        public ReplyProfile()
        {
            CreateMap<ListRepliesRequest, RepliesFilter>();
            CreateMap<Reply, ReplyDto>();
            CreateMap<Reply, RepliesListItemDto>();
        }
    }
}