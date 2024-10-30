using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(BusinessEntityRow))]
public class BusinessEntityPage : Controller
{
    [Route("Company/BusinessEntity")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/BusinessEntity/BusinessEntityPage",
            BusinessEntityRow.Fields.PageTitle());
    }
}