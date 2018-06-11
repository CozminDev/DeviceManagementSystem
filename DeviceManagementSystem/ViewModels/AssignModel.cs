using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.ViewModels
{
    public class AssignModel
    {
        [Required]
        public string Name { get; set; }
    }
}
