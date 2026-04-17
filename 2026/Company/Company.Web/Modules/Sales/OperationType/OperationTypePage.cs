namespace Company.Sales.Pages;

[PageAuthorize(typeof(OperationTypeRow))]
public class OperationTypePage : Controller
{
    [Route("Sales/OperationType")]
    public ActionResult Index()
    {
        return this.GridPage<OperationTypeRow>("@/Sales/OperationType/OperationTypePage");
    }
}