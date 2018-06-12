using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data.Entities
{
    public class Device
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public string Type { get; set; }
        public string OS { get; set; }
        public string OSVersion { get; set; }
        public string Processor { get; set; }
        public string RAM { get; set; }
        public User User { get; set; }

    }
}
