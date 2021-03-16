﻿using System;

 namespace RestaurantRater.Dtos
{
    public class BaseDto
    {
        public int Id { get; set; }
        
        public DateTime Created { get; set; }
        
        public DateTime? Updated { get; set; }
    }
}