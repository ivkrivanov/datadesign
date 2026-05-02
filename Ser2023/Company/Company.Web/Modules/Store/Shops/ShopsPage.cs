using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(ShopsRow))]
public class ShopsController : Controller
{
    [Route("Store/Shops")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Shops/ShopsPage",
            ShopsRow.Fields.PageTitle());
    }
}
