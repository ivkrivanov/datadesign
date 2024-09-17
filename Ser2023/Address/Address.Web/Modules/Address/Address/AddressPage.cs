
namespace Address.Address.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(AddressRow))]
    public class AddressController : Controller
    {
        [Route("Address/Address")]
        public ActionResult Index()
        {
            return this.GridPage("@/Address/Address/AddressPage",
                AddressRow.Fields.PageTitle());
        }
    }
}