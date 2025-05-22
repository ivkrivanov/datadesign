namespace Company.Company.Pages;

[PageAuthorize(typeof(ProvinceRow))]
public class ProvincePage : Controller
{
    [Route("Company/Province")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/Province/ProvincePage",
            ProvinceRow.Fields.PageTitle());
    }
}