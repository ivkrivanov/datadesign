using MyRow = Company.Sales.CurrencyRateRow;

namespace Company.Sales;

public interface ICurrencyRateListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class CurrencyRateListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ICurrencyRateListHandler
{
}