using MyRow = Company.Sales.OperationTypeRow;

namespace Company.Sales;

public interface IOperationTypeDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class OperationTypeDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IOperationTypeDeleteHandler
{
}