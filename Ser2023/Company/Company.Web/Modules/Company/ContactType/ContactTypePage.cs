using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(ContactTypeRow))]
public class ContactTypePage : Controller
{
    [Route("Company/ContactType")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/ContactType/ContactTypePage",
            ContactTypeRow.Fields.PageTitle());
    }
}