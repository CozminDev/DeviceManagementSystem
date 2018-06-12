using DeviceManagementSystem.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DeviceManagementSystem.Data
{
    public class DMSRepository : IDMSRepository
    {
        private readonly DMSContext _context;

        public DMSRepository(DMSContext context)
        {
            _context = context;
        }

        public void AddDevice(Device model)
        {
            _context.Devices.Add(model);
        }

        public void AssignDevice(int id, User user)
        {
            GetDeviceById(id).User = user;
        }

        public IEnumerable<Device> GetAllDevices()
        {
            return _context.Devices.Include(q => q.User).ToList();
        }

        public Device GetDeviceById(int id)
        {
            return _context.Devices.Where(p => p.Id == id).Include(q=>q.User).FirstOrDefault();
        }

        public void RemoveDevice(int id)
        {
            var item = GetDeviceById(id);
             _context.Devices.Remove(item);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() > 0;
        }

        public void UnassignDevice(int id)
        {
            GetDeviceById(id).User = null;
        }
    }
}
