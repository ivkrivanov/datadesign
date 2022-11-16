
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ShopsRow))]
    public class ShopsController : Controller
    {
        [Route("Store/Shops")]
        public ActionResult Index()
        {
            return View("~/Areas/Store/Shops/ShopsIndex.cshtml");
        }
    }
}