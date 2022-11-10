
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/OrderProductDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderProductDetailRow))]
    public class OrderProductDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/OrderProductDetail/OrderProductDetailIndex.cshtml");
        }
    }
}