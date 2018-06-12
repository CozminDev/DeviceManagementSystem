using DeviceManagementSystem.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DeviceManagementSystem.Data
{
    public class DMSContext:IdentityDbContext<User>
    {
        public DMSContext(DbContextOptions<DMSContext> options):base(options)
        {

        }

        public DbSet<Device> Devices { get; set; }
    }
}
