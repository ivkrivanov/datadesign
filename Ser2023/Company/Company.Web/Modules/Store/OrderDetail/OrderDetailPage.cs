using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(OrderDetailRow))]
public class OrderDetailPage : Controller
{
    [Route("Store/OrderDetail")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/OrderDetail/OrderDetailPage",
            OrderDetailRow.Fields.PageTitle());
    }
}