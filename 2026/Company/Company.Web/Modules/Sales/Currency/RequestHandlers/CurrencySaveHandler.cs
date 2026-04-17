using MyRow = Company.Sales.CurrencyRow;

namespace Company.Sales;

public interface ICurrencySaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class CurrencySaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ICurrencySaveHandler
{
}