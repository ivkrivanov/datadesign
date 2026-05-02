
namespace Store.Store.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.ShippersRow))]
    public class ShippersController : Controller
    {
        [Route("Store/Shippers")]
        public ActionResult Index()
        {
            return this.GridPage("@/Store/Shippers/ShippersPage",
                Entities.ShippersRow.Fields.PageTitle());
        }
    }
}