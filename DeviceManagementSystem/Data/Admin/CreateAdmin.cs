﻿using DeviceManagementSystem.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data.Admin
{
    public class CreateAdmin
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<User> _userManager;

        public CreateAdmin(RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
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