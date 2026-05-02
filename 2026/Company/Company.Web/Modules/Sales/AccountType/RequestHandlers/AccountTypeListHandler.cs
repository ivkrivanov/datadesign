using MyRow = Company.Sales.AccountTypeRow;

namespace Company.Sales;

public interface IAccountTypeListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class AccountTypeListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IAccountTypeListHandler
{
}