

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/SupportType", typeof(Ledger.Infra.Pages.SupportTypeController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/SupportType"), Route("{action=index}")]
    public class SupportTypeController : Controller
    {
        [PageAuthorize("Infra.PermissionKeys.General")]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/SupportType/SupportTypeIndex.cshtml");
        }
    }
}