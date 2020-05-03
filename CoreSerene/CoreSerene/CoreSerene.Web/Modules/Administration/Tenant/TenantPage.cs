
namespace Serene1.Administration.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.TenantRow))]
    public class TenantController : Controller
    {
        [Route("Administration/Tenant")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenant/TenantIndex.cshtml");
        }
    }
}