
namespace Serene1.Default.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Infra/AddressType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AddressTypeRow))]
    public class AddressTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Infra/AddressType/AddressTypeIndex.cshtml");
        }
    }
}