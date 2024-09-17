
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ProductMovementRow))]
    public class ProductMovementController : Controller
    {
        [Route("Store/ProductMovement")]
        public ActionResult Index()
        {
            return View("~/Areas/Store/ProductMovement/ProductMovementIndex.cshtml");
        }
    }
}