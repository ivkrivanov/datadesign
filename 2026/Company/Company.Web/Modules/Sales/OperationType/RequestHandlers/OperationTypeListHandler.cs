using MyRow = Company.Sales.OperationTypeRow;

namespace Company.Sales;

public interface IOperationTypeListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class OperationTypeListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IOperationTypeListHandler
{
}