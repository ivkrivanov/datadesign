using Microsoft.AspNetCore.Mvc;
using Serenity.Web;
using Store.Store.Entities;

namespace Store.Store.Pages 
{

    [PageAuthorize(typeof(DocumentTypeRow))]
    public class DocumentTypeController : Controller
    {
        [Route("Store/DocumentType")]
        public ActionResult Index()
        {
            return this.GridPage("@/Store/DocumentType/DocumentTypePage",
                DocumentTypeRow.Fields.PageTitle());
        }
    }
}