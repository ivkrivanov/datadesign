using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(CurrencyRow))]
public class CurrencyPage : Controller
{
    [Route("Company/Currency")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/Currency/CurrencyPage",
            CurrencyRow.Fields.PageTitle());
    }
}