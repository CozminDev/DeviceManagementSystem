using DeviceManagementSystem.Data;
using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Controllers
{
    [Route("api/account")]
    public class AccountController:Controller
    {
        private readonly DMSContext _ctx;
        private readonly UserManager<DMSUser> _userManager;
        private readonly SignInManager<DMSUser> _signInManager;

        public AccountController(DMSContext ctx,UserManager<DMSUser> userManager,SignInManager<DMSUser> signInManager)
        {
            _ctx = ctx;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
       {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = new DMSUser
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
                return BadRequest("Failed to Create User");

            }
            return new OkObjectResult("Account created");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = new DMSUser
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

    }

}
