
namespace Store.BasicReports.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("BasicReports"), Route("{action=index}")]
    public partial class BasicReportsController : Controller
    {
    }
}