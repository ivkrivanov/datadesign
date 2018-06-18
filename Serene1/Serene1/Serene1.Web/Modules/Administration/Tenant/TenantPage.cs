

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Administration/Tenant", typeof(Serene1.Administration.Pages.TenantController))]

namespace Serene1.Administration.Pages
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