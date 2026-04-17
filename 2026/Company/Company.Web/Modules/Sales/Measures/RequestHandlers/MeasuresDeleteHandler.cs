using MyRow = Company.Sales.MeasuresRow;

namespace Company.Sales;

public interface IMeasuresDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class MeasuresDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IMeasuresDeleteHandler
{
}