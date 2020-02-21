
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/OrderProduct"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderProductRow))]
    public class OrderProductController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/OrderProduct/OrderProductIndex.cshtml");
        }
    }
}