
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/WaresCategories"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.WaresCategoriesRow))]
    public class WaresCategoriesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/WaresCategories/WaresCategoriesIndex.cshtml");
        }
    }
}