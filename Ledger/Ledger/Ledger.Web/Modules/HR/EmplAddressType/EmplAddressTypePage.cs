

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "HR/EmplAddressType", typeof(Ledger.HR.Pages.EmplAddressTypeController))]

namespace Ledger.HR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("HR/EmplAddressType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmplAddressTypeRow))]
    public class EmplAddressTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/HR/EmplAddressType/EmplAddressTypeIndex.cshtml");
        }
    }
}