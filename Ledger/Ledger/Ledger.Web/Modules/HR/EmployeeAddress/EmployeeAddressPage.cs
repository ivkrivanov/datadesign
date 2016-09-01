

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "HR/EmployeeAddress", typeof(Ledger.HR.Pages.EmployeeAddressController))]

namespace Ledger.HR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HR/EmployeeAddress"), Route("{action=index}")]
    public class EmployeeAddressController : Controller
    {
        [PageAuthorize(HR.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/HR/EmployeeAddress/EmployeeAddressIndex.cshtml");
        }
    }
}