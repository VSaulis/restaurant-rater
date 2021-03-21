namespace RestaurantRater.Dtos.Category
{
    public class CategoriesListItemDto : BaseDto
    {
        public string Name { get; set; }
        public int RestaurantsCount { get; set; }
    }
}