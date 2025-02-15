using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Default.Pages;

[PageAuthorize(typeof(TenantsRow))]
public class TenantsPage : Controller
{
    [Route("Default/Tenants")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Tenants/TenantsPage",
            TenantsRow.Fields.PageTitle());
    }
}