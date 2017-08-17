

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/SupportType", typeof(Store.Infra.Pages.SupportTypeController))]

namespace Store.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/SupportType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupportTypeRow))]
    public class SupportTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Infra/SupportType/SupportTypeIndex.cshtml");
        }
    }
}