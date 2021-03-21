using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using RestaurantRater.Core.Services;
using RestaurantRater.Services.Mapper;

namespace RestaurantRater.Services.DI
{
    public class ServicesModule
    {
        public static void RegisterDependencies(IServiceCollection services)
        {
            services.AddAutoMapper(configure => {
                configure.AddProfile<BaseProfile>();
                configure.AddProfile<AuthenticationProfile>();
                configure.AddProfile<RestaurantProfile>();
                configure.AddProfile<ReviewProfile>();
                configure.AddProfile<ReplyProfile>();
                configure.AddProfile<UserProfile>();
                configure.AddProfile<CategoryProfile>();
                configure.AddProfile<ProfileProfile>();
            }, typeof(ServicesModule));

            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IEncryptionService, EncryptionService>();
            services.AddScoped<IFileService, FileService>();
            services.AddScoped<IPermissionsService, PermissionsService>();
            
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IRestaurantService, RestaurantService>();
            services.AddScoped<IReviewService, ReviewService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IReplyService, ReplyService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IProfileService, ProfileService>();
        }
    }
}