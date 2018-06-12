using DeviceManagementSystem.Data;
using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Controllers
{
    [Route("api/devices")]
    public class DevicesController : Controller
    {
        private readonly IDMSRepository _repo;
        private readonly ILogger<DevicesController> _logger;
        private readonly UserManager<User> _userManager;

        public DevicesController(IDMSRepository repo, ILogger<DevicesController> logger, UserManager<User> userManager)
        {
            _repo = repo;
            _logger = logger;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetAllDevices()
        {
            try
            {
                var devices = _repo.GetAllDevices();
                return Ok(devices);
            }
            catch (Exception ex)
            {

                _logger.LogInformation($"Cannot get Devices: {ex}");

                return StatusCode(500, "Cannot get Devices");
            }
        }

        [HttpPost]
        public IActionResult AddDevice([FromBody]DeviceViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = new Device
            {
                Name = model.Name,
                Manufacturer = model.Manufacturer,
                Type = model.Type,
                OS = model.OS,
                OSVersion = model.OSVersion,
                Processor = model.Processor,
                RAM = model.RAM
            };
            _repo.AddDevice(result);

            if (_repo.SaveChanges())
            {
                return Ok("Device Added");
            }

            return StatusCode(500, "Cannot add Device");
        }

        [HttpPatch("assign/{id}")]
        public async Task<IActionResult> AssignDevice(int id, [FromBody] AssignModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await _userManager.FindByNameAsync(model.Name);
            if (user != null)
            {
                _repo.AssignDevice(id, user);
                if (_repo.SaveChanges())
                {
                    return Ok();
                }
            }

            return StatusCode(500, "Cannot assign Device");

        }

        [HttpPatch("unassign/{id}")]
        public IActionResult UnassignDevice(int id)
        {
            _repo.UnassignDevice(id);
            if (_repo.SaveChanges())
            {
                return Ok();
            }

            return StatusCode(500, "Cannot unassign Device");

        }

        [HttpDelete("{id}")]
        public IActionResult RemoveDevice(int id)
        {
            _repo.RemoveDevice(id);
            if (_repo.SaveChanges())
            {
                return Ok();
            }

            return StatusCode(500, "Cannot remove Device");
        }
    }
}
