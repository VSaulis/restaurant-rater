using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public class ReplyRepository : BaseRepository<Reply, RepliesFilter>, IReplyRepository
    {
        public ReplyRepository(SqlContext context) : base(context)
        {
        }
    }
}