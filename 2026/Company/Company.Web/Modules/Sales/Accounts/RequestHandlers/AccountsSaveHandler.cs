using MyRow = Company.Sales.AccountsRow;

namespace Company.Sales;

public interface IAccountsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class AccountsSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IAccountsSaveHandler
{
}