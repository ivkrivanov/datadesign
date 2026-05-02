
namespace Address.Address.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(AddressTypeRow))]
    public class AddressTypeController : Controller
    {
        [Route("Address/AddressType")]
        public ActionResult Index()
        {
            return this.GridPage("@/Address/AddressType/AddressTypePage",
                AddressTypeRow.Fields.PageTitle());
        }
    }
}