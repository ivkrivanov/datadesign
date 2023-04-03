
namespace Address.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(TenantRow))]
    public class TenantController : Controller
    {
        [Route("Administration/Tenant")]
        public ActionResult Index()
        {
            return this.GridPage("@/Administration/Tenant/TenantPage",
                TenantRow.Fields.PageTitle());
        }
    }
}