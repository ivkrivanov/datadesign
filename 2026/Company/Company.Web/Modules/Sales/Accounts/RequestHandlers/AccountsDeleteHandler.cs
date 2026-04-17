using MyRow = Company.Sales.AccountsRow;

namespace Company.Sales;

public interface IAccountsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class AccountsDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IAccountsDeleteHandler
{
}