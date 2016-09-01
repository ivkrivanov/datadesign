

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Currency", typeof(Ledger.Infra.Pages.CurrencyController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Currency"), Route("{action=index}")]
    public class CurrencyController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Currency/CurrencyIndex.cshtml");
        }
    }
}