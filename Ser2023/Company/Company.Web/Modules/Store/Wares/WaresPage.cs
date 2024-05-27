using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;
[PageAuthorize(typeof(WaresRow))]
public class WaresController : Controller
{
    [Route("Store/Wares")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Wares/WaresPage",
            WaresRow.Fields.PageTitle());
    }
}