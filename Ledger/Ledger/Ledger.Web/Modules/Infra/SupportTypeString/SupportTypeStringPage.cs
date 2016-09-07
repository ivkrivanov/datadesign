

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/SupportTypeString", typeof(Ledger.Infra.Pages.SupportTypeStringController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/SupportTypeString"), Route("{action=index}")]
    public class SupportTypeStringController : Controller
    {
        [PageAuthorize("Infra.PermissionKeys.General")]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/SupportTypeString/SupportTypeStringIndex.cshtml");
        }
    }
}