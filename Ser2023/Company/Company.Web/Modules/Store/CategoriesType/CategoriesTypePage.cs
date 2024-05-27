using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(CategoriesTypeRow))]
public class CategoriesTypeController : Controller
{
    [Route("Store/CategoriesType")]
    public ActionResult Index()
    {
        //return View("~/Areas/Store/CategoriesType/CategoriesTypeIndex.cshtml");
        return this.GridPage("@/Store/CategoriesType/CategoriesTypePage",
                CategoriesTypeRow.Fields.PageTitle());
    }
}
