
namespace Store.Store.Pages
{
    using global::Store.Store.Entities;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Store/Categories")]
        public ActionResult Index()
        {
            //return View("~/Areas/Store/Categories/CategoriesIndex.cshtml");
            return this.GridPage("@/Store/Categories/CategoriesPage",
                CategoriesRow.Fields.PageTitle());
        }
    }
}