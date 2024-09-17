using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(AddressRow))]
public class AddressPage : Controller
{
    [Route("Company/Address")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/Address/AddressPage",
            AddressRow.Fields.PageTitle());
    }
}