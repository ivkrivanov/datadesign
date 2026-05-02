
namespace Store.Store.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.CounterpartiesRow))]
    public class CounterpartiesController : Controller
    {
        [Route("Store/Counterparties")]
        public ActionResult Index()
        {
            return this.GridPage("@/Store/Counterparties/CounterpartiesPage",
                Entities.CounterpartiesRow.Fields.PageTitle());
        }
    }
}