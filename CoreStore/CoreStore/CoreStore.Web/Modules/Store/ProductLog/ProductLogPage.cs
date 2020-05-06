
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductLogRow))]
    public class ProductLogController : Controller
    {
        [Route("Store/ProductLog")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/ProductLog/ProductLogIndex.cshtml");
        }
    }
}