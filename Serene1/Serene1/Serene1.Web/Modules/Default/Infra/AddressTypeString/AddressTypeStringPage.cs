
namespace Serene1.Default.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Infra/AddressTypeString"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AddressTypeStringRow))]
    public class AddressTypeStringController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Infra/AddressTypeString/AddressTypeStringIndex.cshtml");
        }
    }
}