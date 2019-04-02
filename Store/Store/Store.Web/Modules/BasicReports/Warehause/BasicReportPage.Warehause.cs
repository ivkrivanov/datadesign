
namespace Store.BasicReports.Pages
{
    using System.Web.Mvc;
    using Views = MVC.Views.BasicReports.Warehause;

    public partial class BasicReportsController : Controller
    {
        public ActionResult StoreMove()
        {
            return View(Views.StoreMove.Index);
        }
    }
}