using System.ComponentModel.DataAnnotations;

namespace DeviceManagementSystem.ViewModels
{
    public class AssignModel
    {
        [Required]
        public string Name { get; set; }
    }
}
