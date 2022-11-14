
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.WaresMovementDetailsRow))]
    public class WaresMovementDetailsController : Controller
    {
        [Route("Store/WaresMovementDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/WaresMovementDetails/WaresMovementDetailsIndex.cshtml");
        }
    }
}