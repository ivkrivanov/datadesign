using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(PersonViewRow))]
public class PersonViewPage : Controller
{
    [Route("Company/PersonView")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/PersonView/PersonViewPage",
            PersonViewRow.Fields.PageTitle());
    }
}