
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/CustomerDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerDetailsRow))]
    public class CustomerDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/CustomerDetails/CustomerDetailsIndex.cshtml");
        }
    }
}