using MyRow = Company.Sales.MeasuresRow;

namespace Company.Sales;

public interface IMeasuresRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class MeasuresRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IMeasuresRetrieveHandler
{
}