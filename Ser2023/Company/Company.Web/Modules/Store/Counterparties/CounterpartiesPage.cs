namespace Company.Store.Pages;

using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

[PageAuthorize(typeof(CounterpartiesRow))]
public class CounterpartiesController : Controller
{
    [Route("Store/Counterparties")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Counterparties/CounterpartiesPage",
            CounterpartiesRow.Fields.PageTitle());
    }
}