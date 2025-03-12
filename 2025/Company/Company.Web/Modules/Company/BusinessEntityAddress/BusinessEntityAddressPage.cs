using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(BusinessEntityAddressRow))]
public class BusinessEntityAddressPage : Controller
{
    [Route("Company/BusinessEntityAddress")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/BusinessEntityAddress/BusinessEntityAddressPage",
            BusinessEntityAddressRow.Fields.PageTitle());
    }
}