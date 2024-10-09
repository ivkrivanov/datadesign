using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages; 

[PageAuthorize(typeof(ShippersRow))]
public class ShippersController : Controller
{
    [Route("Store/Shippers")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Shippers/ShippersPage",
            ShippersRow.Fields.PageTitle());
    }
}