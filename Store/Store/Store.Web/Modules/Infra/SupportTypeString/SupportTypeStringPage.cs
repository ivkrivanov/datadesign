

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/SupportTypeString", typeof(Store.Infra.Pages.SupportTypeStringController))]

namespace Store.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/SupportTypeString"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupportTypeStringRow))]
    public class SupportTypeStringController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Infra/SupportTypeString/SupportTypeStringIndex.cshtml");
        }
    }
}