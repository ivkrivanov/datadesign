
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Categories"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Categories/CategoriesIndex.cshtml");
        }
    }
}