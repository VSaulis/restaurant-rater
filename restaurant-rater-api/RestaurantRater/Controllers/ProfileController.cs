using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestaurantRater.Contracts.Profile;
using RestaurantRater.Core.Services;
using RestaurantRater.System.Extensions;

namespace RestaurantRater.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Edit([FromBody] EditProfileRequest request)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.GetErrorMessages());

            var response = await _profileService.EditAsync(request);
            if (!response.IsValid) return BadRequest(response.Message);
            return Ok(response);
        }
        
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {
            if (!ModelState.IsValid) return BadRequest(ModelState.GetErrorMessages());

            var response = await _profileService.GetAsync();
            if (!response.IsValid) return BadRequest(response.Message);
            return Ok(response);
        }
    }
}