using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Internal;
using Microsoft.AspNetCore.Http;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Restaurant;
using RestaurantRater.Core.Filters;
using RestaurantRater.Core.Models;
using RestaurantRater.Core.Repositories;
using RestaurantRater.Core.Services;
using RestaurantRater.Dtos.Restaurant;

namespace RestaurantRater.Services
{
    public class RestaurantService : IRestaurantService
    {
        private readonly IRestaurantRepository _restaurantRepository;
        private readonly HttpContext _httpContext;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RestaurantService
        (
            IRestaurantRepository restaurantRepository,
            IMapper mapper,
            IUnitOfWork unitOfWork,
            IHttpContextAccessor httpContextAccessor
        )
        {
            _httpContext = httpContextAccessor.HttpContext;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _restaurantRepository = restaurantRepository;
        }

        public async Task<ListResponse<RestaurantsListItemDto>> ListAsync(ListRestaurantsRequest request)
        {
            var filter = _mapper.Map<ListRestaurantsRequest, RestaurantsFilter>(request);
            var sort = _mapper.Map<ListRestaurantsRequest, Sort>(request);
            var paging = _mapper.Map<ListRestaurantsRequest, Paging>(request);

            var restaurants = await _restaurantRepository.GetListAsync(filter, sort, paging);
            var restaurantsCount = await _restaurantRepository.CountAsync(filter);

            var restaurantsDtosList = _mapper.Map<List<Restaurant>, List<RestaurantsListItemDto>>(restaurants);
            return new ListResponse<RestaurantsListItemDto>(restaurantsDtosList, restaurantsCount);
        }

        public async Task<ResultResponse<RestaurantDto>> GetAsync(int id)
        {
            var restaurant = await _restaurantRepository.GetByIdAsync(id);
            if (restaurant == null) return new ResultResponse<RestaurantDto>("Restaurant is not found");

            var restaurantDto = _mapper.Map<Restaurant, RestaurantDto>(restaurant);
            return new ResultResponse<RestaurantDto>(restaurantDto);
        }

        public async Task<BaseResponse> AddAsync(AddRestaurantRequest request)
        {
            var restaurant = _mapper.Map<AddRestaurantRequest, Restaurant>(request);
            var loggedUser = (User) _httpContext.Items.GetOrDefault("User");
            restaurant.CreatedById = loggedUser.Id;

            await _restaurantRepository.AddAsync(restaurant);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> EditAsync(int id, EditRestaurantRequest request)
        {
            var restaurant = await _restaurantRepository.GetByIdAsync(id);
            if (restaurant == null) return new BaseResponse("Restaurant is not found");

            restaurant.Title = request.Title;
            restaurant.Description = request.Description;
            _restaurantRepository.Update(restaurant);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }

        public async Task<BaseResponse> DeleteAsync(int id)
        {
            var restaurant = await _restaurantRepository.GetByIdAsync(id);
            if (restaurant == null) return new BaseResponse("Restaurant is not found");

            _restaurantRepository.Delete(restaurant);
            await _unitOfWork.SaveChangesAsync();
            return new BaseResponse();
        }
    }
}