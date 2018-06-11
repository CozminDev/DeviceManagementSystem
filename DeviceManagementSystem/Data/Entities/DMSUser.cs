using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data.Entities
{
    public class DMSUser : IdentityUser
    {
        public string Name { get; set; }
        public string Location { get; set; }
    }
}
