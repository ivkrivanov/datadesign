namespace Company.Sales.Pages;

[PageAuthorize(typeof(AccountsRow))]
public class AccountsPage : Controller
{
    [Route("Sales/Accounts")]
    public ActionResult Index()
    {
        return this.GridPage<AccountsRow>("@/Sales/Accounts/AccountsPage");
    }
}