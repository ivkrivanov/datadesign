

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Tenant", typeof(Ledger.Administration.Pages.TenantController))]

namespace Ledger.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Tenant"), Route("{action=index}")]
    public class TenantController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenant/TenantIndex.cshtml");
        }
    }
}