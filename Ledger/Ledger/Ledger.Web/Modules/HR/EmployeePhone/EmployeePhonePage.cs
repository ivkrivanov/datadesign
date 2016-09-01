

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "HR/EmployeePhone", typeof(Ledger.HR.Pages.EmployeePhoneController))]

namespace Ledger.HR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HR/EmployeePhone"), Route("{action=index}")]
    public class EmployeePhoneController : Controller
    {
        [PageAuthorize("HR.PermissionKeys.General")]
        public ActionResult Index()
        {
            return View("~/Modules/HR/EmployeePhone/EmployeePhoneIndex.cshtml");
        }
    }
}