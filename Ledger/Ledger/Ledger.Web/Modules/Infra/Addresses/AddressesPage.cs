

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Addresses", typeof(Ledger.Infra.Pages.AddressesController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Addresses"), Route("{action=index}")]
    public class AddressesController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Addresses/AddressesIndex.cshtml");
        }
    }
}