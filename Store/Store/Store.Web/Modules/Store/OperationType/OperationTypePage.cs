
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/OperationType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OperationTypeRow))]
    public class OperationTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/OperationType/OperationTypeIndex.cshtml");
        }
    }
}