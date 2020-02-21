
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/DocumentType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DocumentTypeRow))]
    public class DocumentTypeController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Store/DocumentType/DocumentTypeIndex.cshtml");
            return View(MVC.Views.Store.DocumentType.DocumentTypeIndex);
        }
    }
}