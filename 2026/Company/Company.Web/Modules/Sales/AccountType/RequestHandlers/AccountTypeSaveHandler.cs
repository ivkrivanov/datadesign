using MyRow = Company.Sales.AccountTypeRow;

namespace Company.Sales;

public interface IAccountTypeSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class AccountTypeSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IAccountTypeSaveHandler
{
}