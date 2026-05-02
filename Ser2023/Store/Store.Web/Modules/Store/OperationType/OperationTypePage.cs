
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
            return this.GridPage("@/Store/OperationType/OperationTypePage",
                Entities.OperationTypeRow.Fields.PageTitle());
        }
    }
}