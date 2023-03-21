
namespace Address.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    //[Route("Services/Administration/Tenant/[action]")]
    [PageAuthorize(typeof(TenantRow))]
    public class TenantController : Controller
    {
        [Route("Administration/Tenant")]
        public ActionResult Index()
        {
            //return View("~/Modules/Administration/Tenant/TenantIndex.cshtml");
            return this.GridPage("@/Administration/Tenant/TenantPage",
                TenantRow.Fields.PageTitle());
        }
    }
}