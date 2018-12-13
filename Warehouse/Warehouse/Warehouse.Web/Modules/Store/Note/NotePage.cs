
namespace Warehouse.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Note"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NoteRow))]
    public class NoteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Store/Note/NoteIndex.cshtml");
        }
    }
}