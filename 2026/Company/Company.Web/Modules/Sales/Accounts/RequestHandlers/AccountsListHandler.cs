using MyRow = Company.Sales.AccountsRow;

namespace Company.Sales;

public interface IAccountsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class AccountsListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IAccountsListHandler
{
}