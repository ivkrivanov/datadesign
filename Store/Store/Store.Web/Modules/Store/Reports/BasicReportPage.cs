
namespace Store.Store.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("BasicReports"), Route("{action=index}")]
    public partial class BasicReportController : Controller
    {
    }
}