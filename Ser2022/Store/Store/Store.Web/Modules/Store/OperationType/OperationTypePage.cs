
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.OperationTypeRow))]
    public class OperationTypeController : Controller
    {
        [Route("Store/OperationType")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/OperationType/OperationTypeIndex.cshtml");
        }
    }
}