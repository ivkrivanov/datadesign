
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Item"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ItemRow))]
    public class ItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Item/ItemIndex.cshtml");
        }
    }
}