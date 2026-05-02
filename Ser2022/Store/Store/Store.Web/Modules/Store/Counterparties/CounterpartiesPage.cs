
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
            return View("~/Areas/Store/Counterparties/CounterpartiesIndex.cshtml");
        }
    }
}
