using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagementSystem.Data
{
    public class DbInitialization
    {
        private readonly DMSContext _context;

        public DbInitialization(DMSContext context)
        {
            _context = context;
        }

        public void Initialize()
        {
            _context.Database.Migrate();
        }
     
    }
}
