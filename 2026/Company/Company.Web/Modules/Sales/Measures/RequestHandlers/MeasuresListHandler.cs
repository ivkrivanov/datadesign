using MyRow = Company.Sales.MeasuresRow;

namespace Company.Sales;

public interface IMeasuresListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class MeasuresListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IMeasuresListHandler
{
}