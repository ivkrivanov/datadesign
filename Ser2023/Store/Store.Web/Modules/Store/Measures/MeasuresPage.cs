
namespace Store.Store.Pages 
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;
    using global::Store.Store.Entities;

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
}