using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(ProductsRow))]
public class ProductsController : Controller
{
    [Route("Store/Products")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Products/ProductsPage",
            ProductsRow.Fields.PageTitle());
    }
}