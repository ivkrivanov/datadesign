using MyRow = Company.Sales.CurrencyRateRow;

namespace Company.Sales;

public interface ICurrencyRateSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class CurrencyRateSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ICurrencyRateSaveHandler
{
}