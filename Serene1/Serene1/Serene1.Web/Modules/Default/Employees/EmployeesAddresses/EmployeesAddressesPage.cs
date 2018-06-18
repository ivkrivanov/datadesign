
namespace Serene1.Default.Employees.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Employees/EmployeesAddresses"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeesAddressesRow))]
    public class EmployeesAddressesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Employees/EmployeesAddresses/EmployeesAddressesIndex.cshtml");
        }
    }
}