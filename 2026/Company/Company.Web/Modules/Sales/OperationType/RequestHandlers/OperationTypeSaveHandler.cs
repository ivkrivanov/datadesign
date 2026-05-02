using MyRow = Company.Sales.OperationTypeRow;

namespace Company.Sales;

public interface IOperationTypeSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class OperationTypeSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IOperationTypeSaveHandler
{
}