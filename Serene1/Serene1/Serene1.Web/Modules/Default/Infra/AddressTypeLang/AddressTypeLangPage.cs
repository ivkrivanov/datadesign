
namespace Serene1.Default.Infra.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/AddressTypeLang"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AddressTypeLangRow))]
    public class AddressTypeLangController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/AddressTypeLang/AddressTypeLangIndex.cshtml");
        }
    }
}