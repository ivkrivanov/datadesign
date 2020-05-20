
namespace CoreStore.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

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