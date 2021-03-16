using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RestaurantRater.Constants.Enums;
using RestaurantRater.Core.Models;

namespace RestaurantRater.Repositories.Context
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnUserModelCreating(modelBuilder);
            OnRestaurantModelCreating(modelBuilder);
            OnReviewModelCreating(modelBuilder);
            OnRestaurantImageModelCreating(modelBuilder);
        }

        private static void OnUserModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .Property(user => user.Status)
                .HasConversion(new EnumToStringConverter<UserStatuses>());
            
            modelBuilder
                .Entity<User>()
                .Property(user => user.Role)
                .HasConversion(new EnumToStringConverter<UserRoles>());
        }

        private static void OnRestaurantModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurant>()
                .HasOne(restaurant => restaurant.CreatedBy)
                .WithMany(user => user.Restaurants)
                .HasForeignKey(restaurant => restaurant.CreatedById);
        }
        
        private static void OnRestaurantImageModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RestaurantImage>()
                .HasOne(restaurantImage => restaurantImage.Restaurant)
                .WithMany(restaurant => restaurant.RestaurantImages)
                .HasForeignKey(restaurantImage => restaurantImage.RestaurantId);
        }
        
        private static void OnReviewModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Review>()
                .HasOne(review => review.CreatedBy)
                .WithMany(user => user.Reviews)
                .HasForeignKey(review => review.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Review>()
                .HasOne(review => review.Restaurant)
                .WithMany(restaurant => restaurant.Reviews)
                .HasForeignKey(review => review.RestaurantId);
            
            modelBuilder.Entity<Review>()
                .HasOne(review => review.Reply)
                .WithOne(reply => reply.Review)
                .HasForeignKey<Reply>(reply => reply.ReviewId);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<RestaurantImage> RestaurantImages { get; set; }
        public DbSet<Reply> Replies { get; set; }
    }
}