using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Company.Store.Pages;

[PageAuthorize(typeof(MeasuresRow))]
public class MeasuresController : Controller
{
    [Route("Store/Measures")]
    public ActionResult Index()
    {
        return this.GridPage("@/Store/Measures/MeasuresPage",
            MeasuresRow.Fields.PageTitle());
    }
}