
using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(OperationTypeRow))]
public class OperationTypeController : Controller
{
    [Route("Store/OperationType")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/OperationType/OperationTypePage",
            OperationTypeRow.Fields.PageTitle());
    }
}
