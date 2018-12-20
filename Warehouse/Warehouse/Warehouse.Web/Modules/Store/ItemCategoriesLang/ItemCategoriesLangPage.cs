
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ItemCategoriesLang"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemCategoriesLangRow))]
    public class ItemCategoriesLangController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ItemCategoriesLang/ItemCategoriesLangIndex.cshtml");
        }
    }
}