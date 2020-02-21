
namespace Store.Store.Pages
{
    using global::Store.Store;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Store/Reports"), Route("{action=index}")]
    [PageAuthorize(StorePermissionKeys.General)]
    public class ReportsController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Reporting.ReportPage,
                new ReportRepository().GetReportTree("Store"));
        }
    }
}