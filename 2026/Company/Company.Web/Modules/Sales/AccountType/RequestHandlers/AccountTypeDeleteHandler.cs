using MyRow = Company.Sales.AccountTypeRow;

namespace Company.Sales;

public interface IAccountTypeDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class AccountTypeDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IAccountTypeDeleteHandler
{
}