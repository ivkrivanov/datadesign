
namespace Warehouse.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ProductDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductDetailRow))]
    public class ProductDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductDetail/ProductDetailIndex.cshtml");
        }
    }
}