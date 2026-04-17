namespace Company.Sales.Pages;

[PageAuthorize(typeof(CategoriesTypeRow))]
public class CategoriesTypePage : Controller
{
    [Route("Sales/CategoriesType")]
    public ActionResult Index()
    {
        return this.GridPage<CategoriesTypeRow>("@/Sales/CategoriesType/CategoriesTypePage");
    }
}