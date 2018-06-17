using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Controllers
{
    [Route("api/account")]
    public class AccountController:Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager,SignInManager<User> signInManager)
        {
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
            return new OkObjectResult("Account created");
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

    }

}
