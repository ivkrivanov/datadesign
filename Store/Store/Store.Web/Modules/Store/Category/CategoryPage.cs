
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Category"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Category/CategoryIndex.cshtml");
        }
    }
}