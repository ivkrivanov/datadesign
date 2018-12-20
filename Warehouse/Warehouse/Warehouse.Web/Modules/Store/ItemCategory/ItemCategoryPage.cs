
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ItemCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemCategoryRow))]
    public class ItemCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ItemCategory/ItemCategoryIndex.cshtml");
        }
    }
}