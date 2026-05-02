namespace Company.Sales.Pages;

[PageAuthorize(typeof(DocumentTypeRow))]
public class DocumentTypePage : Controller
{
    [Route("Sales/DocumentType")]
    public ActionResult Index()
    {
        return this.GridPage<DocumentTypeRow>("@/Sales/DocumentType/DocumentTypePage");
    }
}