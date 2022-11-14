
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.WaresRow))]
    public class WaresController : Controller
    {
        [Route("Store/Wares")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/Wares/WaresIndex.cshtml");
        }
    }
}