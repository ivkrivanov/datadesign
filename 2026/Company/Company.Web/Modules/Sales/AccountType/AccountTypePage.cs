namespace Company.Sales.Pages;

[PageAuthorize(typeof(AccountTypeRow))]
public class AccountTypePage : Controller
{
    [Route("Sales/AccountType")]
    public ActionResult Index()
    {
        return this.GridPage<AccountTypeRow>("@/Sales/AccountType/AccountTypePage");
    }
}