using System.ComponentModel.DataAnnotations;

namespace DeviceManagementSystem.ViewModels
{
    public class DeviceViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Manufacturer { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string OS { get; set; }
        [Required]
        public string OSVersion { get; set; }
        [Required]
        public string Processor { get; set; }
        [Required]
        public string RAM { get; set; }
    }
}
