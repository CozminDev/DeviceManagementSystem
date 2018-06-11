using DeviceManagementSystem.Data;
using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Controllers
{
    [Route("api/devices")]
    public class DevicesController : Controller
    {
        private readonly IDMSRepository _repo;
        private readonly ILogger<DevicesController> _logger;
        private readonly UserManager<DMSUser> _userManager;

        public DevicesController(IDMSRepository repo, ILogger<DevicesController> logger, UserManager<DMSUser> userManager)
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

                _logger.LogInformation($"Couldn't get devices: {ex}");
                return BadRequest("Couldn't get devices");
            }
        }

        [HttpPost]
        public IActionResult AddDevice([FromBody]DeviceViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Information incorrect!");
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
                return Ok("Device Added!");
            }

            return BadRequest("Can't add Device");


        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> AssignDevice(int id, [FromBody] AssignModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Model is not Valid");
            }
            var user = await _userManager.FindByNameAsync(model.Name);
            if (user != null)
            {
                var result = _repo.GetDeviceById(id).User = user;
                if (_repo.SaveChanges())
                {
                    return Ok();
                }
            }
            return BadRequest("Can't assign User");

        }

        [HttpPatch("unassign/{id}")]
        public IActionResult UnassignDevice(int id)
        {
            var device = _repo.GetDeviceById(id);
            device.User = null;
            if (_repo.SaveChanges())
            {
                return Ok();
            }
            return BadRequest();

        }

        [HttpDelete("{id}")]
        public IActionResult RemoveDevice(int id)
        {
            _repo.RemoveDevice(id);
            if (_repo.SaveChanges())
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
