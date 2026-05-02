using MyRow = Company.Sales.OperationTypeRow;

namespace Company.Sales;

public interface IOperationTypeRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class OperationTypeRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IOperationTypeRetrieveHandler
{
}