
namespace Store.Store.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Measure"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MeasureRow))]
    public class MeasureController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/Store/Measure/MeasureIndex.cshtml");
            return View(MVC.Views.Store.Measure.MeasureIndex);
        }
    }
}