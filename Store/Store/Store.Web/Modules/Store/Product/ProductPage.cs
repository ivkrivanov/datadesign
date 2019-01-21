
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Product"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductRow))]
    public class ProductController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Product/ProductIndex.cshtml");
        }
    }
}