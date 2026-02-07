namespace Company.Sales.Pages;

[PageAuthorize(typeof(CurrencyRateRow))]
public class CurrencyRatePage : Controller
{
    [Route("Sales/CurrencyRate")]
    public ActionResult Index()
    {
        return this.GridPage<CurrencyRateRow>("@/Sales/CurrencyRate/CurrencyRatePage");
    }
}