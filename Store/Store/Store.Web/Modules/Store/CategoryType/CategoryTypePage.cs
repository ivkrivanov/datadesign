
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/CategoryType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryTypeRow))]
    public class CategoryTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/CategoryType/CategoryTypeIndex.cshtml");
        }
    }
}