

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Support", typeof(Ledger.Infra.Pages.SupportController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Support"), Route("{action=index}")]
    public class SupportController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Support/SupportIndex.cshtml");
        }
    }
}