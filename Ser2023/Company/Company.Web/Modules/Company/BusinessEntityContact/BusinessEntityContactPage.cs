using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Company.Pages;

[PageAuthorize(typeof(BusinessEntityContactRow))]
public class BusinessEntityContactPage : Controller
{
    [Route("Company/BusinessEntityContact")]
    public ActionResult Index()
    {
        return this.GridPage("@/Company/BusinessEntityContact/BusinessEntityContactPage",
            BusinessEntityContactRow.Fields.PageTitle());
    }
}