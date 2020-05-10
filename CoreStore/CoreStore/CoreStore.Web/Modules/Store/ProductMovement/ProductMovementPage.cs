
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductMovementRow))]
    public class ProductMovementController : Controller
    {
        [Route("Store/ProductMovement")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductMovement/ProductMovementIndex.cshtml");
        }
    }
}