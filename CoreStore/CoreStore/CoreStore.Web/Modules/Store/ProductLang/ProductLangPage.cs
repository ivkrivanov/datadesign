
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductLangRow))]
    public class ProductLangController : Controller
    {
        [Route("Store/ProductLang")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductLang/ProductLangIndex.cshtml");
        }
    }
}