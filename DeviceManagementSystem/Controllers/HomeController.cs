using Microsoft.AspNetCore.Mvc;

namespace DeviceManagementSystem.Controllers
{
    public class HomeController:Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        
    }
}
