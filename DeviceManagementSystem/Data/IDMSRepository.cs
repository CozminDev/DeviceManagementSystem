using DeviceManagementSystem.Data.Entities;
using System.Collections.Generic;

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
        IEnumerable<User> GetAllUsers();
        void DeleteUser(string username);
    }
}