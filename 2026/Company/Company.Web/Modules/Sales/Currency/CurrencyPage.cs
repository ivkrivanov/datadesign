namespace Company.Sales.Pages;

[PageAuthorize(typeof(CurrencyRow))]
public class CurrencyPage : Controller
{
    [Route("Sales/Currency")]
    public ActionResult Index()
    {
        return this.GridPage<CurrencyRow>("@/Sales/Currency/CurrencyPage");
    }
}