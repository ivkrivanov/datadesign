using MyRow = Company.Sales.CurrencyRateRow;

namespace Company.Sales;

public interface ICurrencyRateDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class CurrencyRateDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ICurrencyRateDeleteHandler
{
}