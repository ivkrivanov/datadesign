
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Employee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeRow))]
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Employee/EmployeeIndex.cshtml");
        }
    }
}