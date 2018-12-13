
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/ProductLang"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductLangRow))]
    public class ProductLangController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductLang/ProductLangIndex.cshtml");
        }
    }
}