
namespace Address.Administration.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(PermissionKeys.Translation)]
    public class TranslationController : Controller
    {
        [Route("Administration/Translation")]
        public ActionResult Index()
        {
            return this.GridPage("@/Administration/Translation/TranslationPage",
                Texts.Db.Administration.Translation.EntityPlural.Key);
        }
    }
}