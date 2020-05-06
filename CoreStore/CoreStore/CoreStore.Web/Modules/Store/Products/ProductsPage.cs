
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

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