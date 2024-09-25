using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(CurrencyRateRow))]
public class CurrencyRatePage : Controller
{
    [Route("Company/CurrencyRate")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/CurrencyRate/CurrencyRatePage",
            CurrencyRateRow.Fields.PageTitle());
    }
}