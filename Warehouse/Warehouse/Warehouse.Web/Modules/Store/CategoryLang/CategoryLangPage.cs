
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/CategoryLang"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryLangRow))]
    public class CategoryLangController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/CategoryLang/CategoryLangIndex.cshtml");
        }
    }
}