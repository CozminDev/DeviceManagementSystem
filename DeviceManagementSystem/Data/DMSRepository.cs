using DeviceManagementSystem.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data
{
    public class DMSRepository : IDMSRepository
    {
        private readonly DMSContext _ctx;

        public DMSRepository(DMSContext ctx)
        {
            _ctx = ctx;
        }

        public void AddDevice(Device model)
        {
            _ctx.Devices.Add(model);
        }

        public IEnumerable<Device> GetAllDevices()
        {
            return _ctx.Devices.Include(q => q.User).ToList();
        }

        public Device GetDeviceById(int id)
        {
            return _ctx.Devices.Where(p => p.Id == id).Include(q=>q.User).FirstOrDefault();
        }

        public void RemoveDevice(int id)
        {
            var item = GetDeviceById(id);
             _ctx.Devices.Remove(item);
        }

        public bool SaveChanges()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
