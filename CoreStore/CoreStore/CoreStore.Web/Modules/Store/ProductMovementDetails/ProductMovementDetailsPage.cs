
namespace CoreStore.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ProductMovementDetailsRow))]
    public class ProductMovementDetailsController : Controller
    {
        [Route("Store/ProductMovementDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductMovementDetails/ProductMovementDetailsIndex.cshtml");
        }
    }
}