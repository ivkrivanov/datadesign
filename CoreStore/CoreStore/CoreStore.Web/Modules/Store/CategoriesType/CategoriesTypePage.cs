
namespace CoreStore.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesTypeRow))]
    public class CategoriesTypeController : Controller
    {
        [Route("Store/CategoriesType")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/CategoriesType/CategoriesTypeIndex.cshtml");
        }
    }
}