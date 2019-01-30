
namespace Store.Store.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Counterparty"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CounterpartyRow))]
    public class CounterpartyController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Store/Counterparty/CounterpartyIndex.cshtml");
            return View(MVC.Views.Store.Counterparty.CounterpartyIndex);
        }
    }
}