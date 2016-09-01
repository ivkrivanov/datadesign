

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Email", typeof(Ledger.Infra.Pages.EmailController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Email"), Route("{action=index}")]
    public class EmailController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Email/EmailIndex.cshtml");
        }
    }
}