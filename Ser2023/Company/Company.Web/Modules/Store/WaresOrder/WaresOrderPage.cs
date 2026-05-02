using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(WaresOrderRow))]
public class WaresOrderController : Controller
{
    [Route("Store/WaresOrder")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/WaresOrder/WaresOrderPage",
            WaresOrderRow.Fields.PageTitle());
    }
}
