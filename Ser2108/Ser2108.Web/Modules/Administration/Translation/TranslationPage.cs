using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Ser2108.Administration.Pages
{
    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {
        [Route("Administration/Translation")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Translation.TranslationIndex);
        }
    }
}