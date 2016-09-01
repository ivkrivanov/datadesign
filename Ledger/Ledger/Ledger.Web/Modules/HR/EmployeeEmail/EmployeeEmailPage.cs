

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "HR/EmployeeEmail", typeof(Ledger.HR.Pages.EmployeeEmailController))]

namespace Ledger.HR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HR/EmployeeEmail"), Route("{action=index}")]
    public class EmployeeEmailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/HR/EmployeeEmail/EmployeeEmailIndex.cshtml");
        }
    }
}