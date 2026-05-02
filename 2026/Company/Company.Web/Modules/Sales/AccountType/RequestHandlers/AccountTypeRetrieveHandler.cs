using MyRow = Company.Sales.AccountTypeRow;

namespace Company.Sales;

public interface IAccountTypeRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class AccountTypeRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IAccountTypeRetrieveHandler
{
}