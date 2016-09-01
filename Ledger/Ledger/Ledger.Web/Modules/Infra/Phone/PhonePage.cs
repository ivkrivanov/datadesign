

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Phone", typeof(Ledger.Infra.Pages.PhoneController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Phone"), Route("{action=index}")]
    public class PhoneController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Phone/PhoneIndex.cshtml");
        }
    }
}