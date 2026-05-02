using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(CountryRow))]
public class CountryPage : Controller
{
    [Route("Company/Country")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/Country/CountryPage",
            CountryRow.Fields.PageTitle());
    }
}