
namespace CoreStore.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ShippersRow))]
    public class ShippersController : Controller
    {
        [Route("Store/Shippers")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/Shippers/ShippersIndex.cshtml");
        }
    }
}