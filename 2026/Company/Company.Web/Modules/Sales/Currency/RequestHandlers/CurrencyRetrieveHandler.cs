using MyRow = Company.Sales.CurrencyRow;

namespace Company.Sales.Currency.RequestHandlers;

public interface ICurrencyRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class CurrencyRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ICurrencyRetrieveHandler
{
}