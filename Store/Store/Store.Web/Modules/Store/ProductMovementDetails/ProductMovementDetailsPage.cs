
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ProductMovementDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductMovementDetailsRow))]
    public class ProductMovementDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductMovementDetails/ProductMovementDetailsIndex.cshtml");
        }
    }
}