using MyRow = Company.Sales.CurrencyRateRow;

namespace Company.Sales;

public interface ICurrencyRateRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class CurrencyRateRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ICurrencyRateRetrieveHandler
{
}