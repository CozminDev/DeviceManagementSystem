using DeviceManagementSystem.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data
{
    public class DMSContext:IdentityDbContext<DMSUser>
    {
        public DMSContext(DbContextOptions<DMSContext> options):base(options)
        {

        }

        public DbSet<Device> Devices { get; set; }
    }
}
