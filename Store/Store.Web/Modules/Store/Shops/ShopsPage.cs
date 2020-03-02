
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Shops"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ShopsRow))]
    public class ShopsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Shops/ShopsIndex.cshtml");
        }
    }
}