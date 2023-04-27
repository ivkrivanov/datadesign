using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(AddressTypeRow))]
public class AddressTypePage : Controller
{
    [Route("Company/AddressType")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/AddressType/AddressTypePage",
            AddressTypeRow.Fields.PageTitle());
    }
}