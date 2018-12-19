
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ItemLang"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemLangRow))]
    public class ItemLangController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ItemLang/ItemLangIndex.cshtml");
        }
    }
}