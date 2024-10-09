using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(WaresOrderDetailRow))]
public class WaresOrderDetailController : Controller
{
    [Route("Store/WaresOrderDetail")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/WaresOrderDetail/WaresOrderDetailPage",
            WaresOrderDetailRow.Fields.PageTitle());
    }
}
