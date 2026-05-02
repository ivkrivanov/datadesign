using MyRow = Company.Sales.CurrencyRow;

namespace Company.Sales;

public interface ICurrencyDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class CurrencyDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ICurrencyDeleteHandler
{
}