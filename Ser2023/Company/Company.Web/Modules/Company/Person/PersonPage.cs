using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(PersonRow))]
public class PersonPage : Controller
{
    [Route("Company/Person")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/Person/PersonPage",
            PersonRow.Fields.PageTitle());
    }
}