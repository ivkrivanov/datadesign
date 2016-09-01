

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "HR/Employee", typeof(Ledger.HR.Pages.EmployeeController))]

namespace Ledger.HR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HR/Employee"), Route("{action=index}")]
    public class EmployeeController : Controller
    {
        [PageAuthorize(HR.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/HR/Employee/EmployeeIndex.cshtml");
        }
    }
}