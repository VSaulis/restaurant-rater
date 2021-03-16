using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Core.Repositories
{
    public interface IBaseRepository<TModel, in TFilter> where TModel : BaseModel where TFilter : BaseFilter
    {
        Task AddAsync(TModel model);
        void Delete(TModel model);
        void Update(TModel model);
        Task<TModel> GetAsync(Expression<Func<TModel, bool>> filter);
        Task<TModel> GetByIdAsync(int id);
        Task<List<TModel>> GetListAsync(TFilter filter = null, Sort sort = null, Paging paging = null);
        Task<int> CountAsync(TFilter filter = null);
    }
}