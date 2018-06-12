using System.Collections.Generic;
using DeviceManagementSystem.Data.Entities;
using DeviceManagementSystem.ViewModels;

namespace DeviceManagementSystem.Data
{
    public interface IDMSRepository
    {
        IEnumerable<Device> GetAllDevices();
        Device GetDeviceById(int id);
        void AddDevice(Device model);
        void AssignDevice(int id, User user);
        void UnassignDevice(int id);
        bool SaveChanges();
        void RemoveDevice(int id);
    }
}