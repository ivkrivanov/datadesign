using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(OrderRow))]
public class OrderPage : Controller
{
    [Route("Store/Order")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Order/OrderPage",
            OrderRow.Fields.PageTitle());
    }
}