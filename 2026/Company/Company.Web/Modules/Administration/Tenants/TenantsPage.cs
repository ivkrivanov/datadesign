namespace Company.Administration.Pages;

[PageAuthorize(typeof(TenantsRow))]
public class TenantsPage : Controller
{
    [Route("Administration/Tenants")]
    public ActionResult Index()
    {
        return this.GridPage("@/Administration/Tenants/TenantsPage",
            TenantsRow.Fields.PageTitle());
    }
}