using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(PhoneNumberTypeRow))]
public class PhoneNumberTypePage : Controller
{
    [Route("Company/PhoneNumberType")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/PhoneNumberType/PhoneNumberTypePage",
            PhoneNumberTypeRow.Fields.PageTitle());
    }
}