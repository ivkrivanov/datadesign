
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Customer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Customer/CustomerIndex.cshtml");
        }
    }
}