
namespace Store.Store.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Store/Categories")]
        public ActionResult Index()
        {
            return this.GridPage("@/Store/Categories/CategoriesPage",
                Entities.CategoriesRow.Fields.PageTitle());
        }
    }
}