

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Support", typeof(Store.Infra.Pages.SupportController))]

namespace Store.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Support"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupportRow))]
    public class SupportController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Support/SupportIndex.cshtml");
        }
    }
}