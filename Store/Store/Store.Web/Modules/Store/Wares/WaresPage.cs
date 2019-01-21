
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Wares"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WaresRow))]
    public class WaresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Wares/WaresIndex.cshtml");
        }
    }
}