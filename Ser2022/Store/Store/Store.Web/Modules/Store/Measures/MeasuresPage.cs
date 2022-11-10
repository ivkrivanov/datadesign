
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MeasuresRow))]
    public class MeasuresController : Controller
    {
        [Route("Store/Measures")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/Measures/MeasuresIndex.cshtml");
        }
    }
}