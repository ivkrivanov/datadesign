
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/WaresMovementDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WaresMovementDetailsRow))]
    public class WaresMovementDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/WaresMovementDetails/WaresMovementDetailsIndex.cshtml");
        }
    }
}