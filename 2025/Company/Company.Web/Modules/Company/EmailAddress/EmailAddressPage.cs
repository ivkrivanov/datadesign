using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(EmailAddressRow))]
public class EmailAddressPage : Controller
{
    [Route("Company/EmailAddress")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/EmailAddress/EmailAddressPage",
            EmailAddressRow.Fields.PageTitle());
    }
}