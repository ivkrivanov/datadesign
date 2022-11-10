
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Store/Categories")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/Categories/CategoriesIndex.cshtml");
        }
    }
}