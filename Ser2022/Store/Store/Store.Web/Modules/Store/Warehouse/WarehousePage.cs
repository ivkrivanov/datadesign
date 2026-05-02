
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WarehouseRow))]
    public class WarehouseController : Controller
    {
        [Route("Store/Warehouse")]
        public ActionResult Index()
        {
            return View("~/Areas/Store/Warehouse/WarehouseIndex.cshtml");
        }
    }
}