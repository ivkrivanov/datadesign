 using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(DocumentTypeRow))]
public class DocumentTypePage : Controller
{
    [Route("Store/DocumentType")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/DocumentType/DocumentTypePage",
            DocumentTypeRow.Fields.PageTitle());
    }
}