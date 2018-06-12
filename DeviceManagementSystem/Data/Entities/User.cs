using Microsoft.AspNetCore.Identity;

namespace DeviceManagementSystem.Data.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string Location { get; set; }
    }
}
