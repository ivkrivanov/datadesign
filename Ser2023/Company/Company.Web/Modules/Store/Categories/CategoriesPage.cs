using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(CategoriesRow))]
public class CategoriesController : Controller
{
    [Route("Store/Categories")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Categories/CategoriesPage",
            CategoriesRow.Fields.PageTitle());
    }
}