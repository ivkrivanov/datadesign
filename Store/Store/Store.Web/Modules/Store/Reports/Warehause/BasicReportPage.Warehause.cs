
namespace Store.Store.Pages
{
    using System.Web.Mvc;
    using Views = MVC.Views.Store.Reports;

    public partial class BasicReportController : Controller
    {
        public ActionResult StoreMove()
        {
            return View(Views.Warehause.StoreMoveReport.Index);
        }
    }
}