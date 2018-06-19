using DeviceManagementSystem.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data.Admin
{
    public class CreateAdmin
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;
        private readonly DMSContext _context;

        public CreateAdmin(RoleManager<IdentityRole> roleManager, UserManager<User> userManager, DMSContext context)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _context = context;
        }
        public async Task createAdminRoleandUser()
        {

            bool x = await _roleManager.RoleExistsAsync("Admin");
            if (!x)
            {

                var role = new IdentityRole();
                role.Name = "Admin";
                await _roleManager.CreateAsync(role);



                var user = new User();
                user.UserName = "admin";
                user.Name = "admin";
                string password = "admin";


                IdentityResult chkUser = await _userManager.CreateAsync(user, password);

                if (chkUser.Succeeded)
                {
                    var result = await _userManager.AddToRoleAsync(user, "Admin");
                }
            }

        }
    }
}
