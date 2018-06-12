using System.ComponentModel.DataAnnotations;

namespace DeviceManagementSystem.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
