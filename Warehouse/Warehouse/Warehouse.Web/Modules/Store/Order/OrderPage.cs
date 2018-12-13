
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Order"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderRow))]
    public class OrderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Order/OrderIndex.cshtml");
        }
    }
}