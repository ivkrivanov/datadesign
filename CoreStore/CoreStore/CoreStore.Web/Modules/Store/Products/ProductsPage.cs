
namespace CoreStore.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("Store/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/Products/ProductsIndex.cshtml");
        }
    }
}