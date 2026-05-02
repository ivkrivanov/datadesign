namespace Company.Sales.Pages;

[PageAuthorize(typeof(MeasuresRow))]
public class MeasuresPage : Controller
{
    [Route("Sales/Measures")]
    public ActionResult Index()
    {
        return this.GridPage<MeasuresRow>("@/Sales/Measures/MeasuresPage");
    }
}