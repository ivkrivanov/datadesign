
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/WaresMovement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WaresMovementRow))]
    public class WaresMovementController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Store/WaresMovement/WaresMovementIndex.cshtml");
            return View(MVC.Views.Store.WaresMovement.WaresMovementIndex);
        }
    }
}