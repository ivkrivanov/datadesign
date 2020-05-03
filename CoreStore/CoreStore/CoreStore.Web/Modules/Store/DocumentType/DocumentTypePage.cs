
namespace CoreStore.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.DocumentTypeRow))]
    public class DocumentTypeController : Controller
    {
        [Route("Store/DocumentType")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/DocumentType/DocumentTypeIndex.cshtml");
        }
    }
}