
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Store"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StoreRow))]
    public class StoreController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Store/StoreIndex.cshtml");
        }
    }
}