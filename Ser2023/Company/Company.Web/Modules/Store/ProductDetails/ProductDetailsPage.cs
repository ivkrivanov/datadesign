using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(ProductDetailsRow))]
public class ProductDetailsController : Controller
{
    [Route("Store/ProductDetails")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/ProductDetails/ProductDetailsPage",
            ProductDetailsRow.Fields.PageTitle());
    }
}