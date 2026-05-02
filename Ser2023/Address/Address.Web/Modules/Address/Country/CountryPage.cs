using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Address.Address.Pages 
{

    [PageAuthorize(typeof(CountryRow))]
    public class CountryController : Controller
    {
        [Route("Address/Country")]
        public ActionResult Index()
        {
            return this.GridPage("@/Address/Country/CountryPage",
                CountryRow.Fields.PageTitle());
        }
    }
}