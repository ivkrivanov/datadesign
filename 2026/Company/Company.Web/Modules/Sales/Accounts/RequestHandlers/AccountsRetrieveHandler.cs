using MyRow = Company.Sales.AccountsRow;

namespace Company.Sales;

public interface IAccountsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class AccountsRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IAccountsRetrieveHandler
{
}