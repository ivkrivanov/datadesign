
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ProductMovement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductMovementRow))]
    public class ProductMovementController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Store/ProductMovement/ProductMovementIndex.cshtml");
            return View(MVC.Views.Store.ProductMovement.ProductMovementIndex);
        }
    }
}