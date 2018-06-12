using System.ComponentModel.DataAnnotations;

namespace DeviceManagementSystem.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Location { get; set; }

    }
}
