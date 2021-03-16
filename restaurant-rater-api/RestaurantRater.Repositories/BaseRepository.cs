using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RestaurantRater.Contracts;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Repositories.Context;

namespace RestaurantRater.Repositories
{
    public abstract class BaseRepository<TModel, TFilter> : IBaseRepository<TModel, TFilter> where TModel : BaseModel where TFilter : BaseFilter
    {
        private const int Limit = 20;
        private const int Offset = 0;
        private readonly SqlContext _context;

        protected BaseRepository(SqlContext context)
        {
            _context = context;
        }

        public async Task AddAsync(TModel model)
        {
            model.Created = DateTime.Now;
            await _context.Set<TModel>().AddAsync(model);
        }

        public void Delete(TModel model)
        {
            _context.Set<TModel>().Remove(model);
        }

        public void Update(TModel model)
        {
            model.Updated = DateTime.Now;
            _context.Set<TModel>().Update(model);
        }

        public async Task<TModel> GetAsync(Expression<Func<TModel, bool>> filter)
        {
            IQueryable<TModel> models = _context.Set<TModel>();
            models = FormatQuery(models);
            return await models.FirstOrDefaultAsync(filter);
        }
        
        public async Task<TModel> GetByIdAsync(int id)
        {
            IQueryable<TModel> models = _context.Set<TModel>();
            models = FormatQuery(models);
            return await models.FirstOrDefaultAsync(model => model.Id == id);
        }

        public async Task<List<TModel>> GetListAsync(TFilter filter = null, Sort sort = null, Paging paging = null)
        {
            IQueryable<TModel> models = _context.Set<TModel>();
            models = FormatQuery(models);
            models = ApplyFilter(models, filter);
            models = ApplySort(models, sort);
            models = ApplyPaging(models, paging);
            return await models.ToListAsync();
        }

        public async Task<int> CountAsync(TFilter filter = null)
        {
            IQueryable<TModel> models = _context.Set<TModel>();
            models = FormatQuery(models);
            models = ApplyFilter(models, filter);
            return await models.CountAsync();
        }

        private IQueryable<TModel> ApplyPaging(IQueryable<TModel> query, Paging paging)
        {
            return query.Skip(paging.Offset).Take(paging.Limit);
        }

        protected virtual IQueryable<TModel> FormatQuery(IQueryable<TModel> query)
        {
            return query;
        }

        protected virtual IQueryable<TModel> ApplyFilter(IQueryable<TModel> query, TFilter filter)
        {
            return query;
        }

        protected virtual IQueryable<TModel> ApplySort(IQueryable<TModel> query, Sort sort)
        {
            return query.OrderByDescending(model => model.Created);
        }
    }
}