
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Supplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SupplierRow))]
    public class SupplierController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Supplier/SupplierIndex.cshtml");
        }
    }
}