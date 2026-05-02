using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Address.Address.Pages 
{

    [PageAuthorize(typeof(StateProvinceRow))]
    public class StateProvinceController : Controller
    {
        [Route("Address/StateProvince")]
        public ActionResult Index()
        {
            return this.GridPage("@/Address/StateProvince/StateProvincePage",
                StateProvinceRow.Fields.PageTitle());
        }
    }
}