
namespace Serene1.Default.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Infra/Addresses"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AddressesRow))]
    public class AddressesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Infra/Addresses/AddressesIndex.cshtml");
        }
    }
}