
namespace CoreStore.Reports.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Views = MVC.Views.Reports.Warehouse;

    public partial class ReportsController : Controller
    {
        public ActionResult StoreMove()
        {
            return View(Views.StoreMove.Index);
        }
        public ActionResult WaresFile()
        {
            return View(Views.WaresFile.Index);
        }
    }
}
