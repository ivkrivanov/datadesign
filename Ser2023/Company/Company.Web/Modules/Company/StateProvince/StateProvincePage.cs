using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(StateProvinceRow))]
public class StateProvincePage : Controller
{
    [Route("Company/StateProvince")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/StateProvince/StateProvincePage",
            StateProvinceRow.Fields.PageTitle());
    }
}