
namespace CoreStore.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Services/Administration/Tenant/[action]")]
    [PageAuthorize(typeof(Entities.TenantRow))]
    public class TenantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenant/TenantIndex.cshtml");
        }
    }
}