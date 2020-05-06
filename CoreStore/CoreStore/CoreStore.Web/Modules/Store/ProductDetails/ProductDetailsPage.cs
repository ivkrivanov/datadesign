
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductDetailsRow))]
    public class ProductDetailsController : Controller
    {
        [Route("Store/ProductDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductDetails/ProductDetailsIndex.cshtml");
        }
    }
}