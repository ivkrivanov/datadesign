
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Company.Administration.Pages
{
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