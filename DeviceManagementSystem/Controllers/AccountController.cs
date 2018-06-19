using DeviceManagementSystem.Data;
using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Controllers
{
    [Route("api/account")]
    public class AccountController:Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IDMSRepository _repo;
        private readonly ILogger<AccountController> _logger;

        public AccountController(UserManager<User> userManager,SignInManager<User> signInManager,IDMSRepository repo,ILogger<AccountController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _repo = repo;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
       {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = new User
            {
                Name = model.Name,
                Location=model.Location,
                UserName=model.Name
                
            };

            if ((await _userManager.FindByNameAsync(userIdentity.UserName)) != null)
            {
                return BadRequest("User already created");
            }

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (result != IdentityResult.Success)
            {
                List<string> errors = new List<string>();

                foreach (IdentityError error in result.Errors)
                {
                    errors.Add(error.Description);
                }
                return BadRequest(errors);
            }
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = new User
            {
                Name = model.Name,
                UserName = model.Name

            };

            var result = await _signInManager.PasswordSignInAsync(userIdentity.UserName, model.Password, true, false);

            if(result != Microsoft.AspNetCore.Identity.SignInResult.Success)
            {
                return BadRequest("Incorrect Account");
            }
            
            return new OkObjectResult(model.Name);
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return Ok();
        }

        [Authorize(Roles ="Admin")]
        [HttpGet("getusers")]
        public IActionResult GetAllUsers()
        {
            try
            {
                var result = _repo.GetAllUsers();

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Cannot get Users: {ex}");

                return StatusCode(500, "Cannot get Users");
            }

        }

        [Authorize(Roles ="Admin")]
        [HttpDelete("deleteuser/{username}")]
        public IActionResult DeleteUser(string username)
        {
            _repo.DeleteUser(username);
            if (_repo.SaveChanges())
            {
                return Ok();
            }

            return StatusCode(500, "Cannot delete User");
        }
    }

}
