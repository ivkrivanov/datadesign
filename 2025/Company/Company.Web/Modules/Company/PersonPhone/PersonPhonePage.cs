using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(PersonPhoneRow))]
public class PersonPhonePage : Controller
{
    [Route("Company/PersonPhone")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/PersonPhone/PersonPhonePage",
            PersonPhoneRow.Fields.PageTitle());
    }
}