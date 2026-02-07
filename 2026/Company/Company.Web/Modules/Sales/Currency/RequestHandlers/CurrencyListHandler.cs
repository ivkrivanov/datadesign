using MyRow = Company.Sales.CurrencyRow;

namespace Company.Sales.Currency.RequestHandlers;

public interface ICurrencyListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class CurrencyListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ICurrencyListHandler
{
}