
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.WaresMovementRow))]
    public class WaresMovementController : Controller
    {
        [Route("Store/WaresMovement")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/WaresMovement/WaresMovementIndex.cshtml");
        }
    }
}