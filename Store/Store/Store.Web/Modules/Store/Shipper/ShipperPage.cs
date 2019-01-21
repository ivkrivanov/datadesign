
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Shipper"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ShipperRow))]
    public class ShipperController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Shipper/ShipperIndex.cshtml");
        }
    }
}