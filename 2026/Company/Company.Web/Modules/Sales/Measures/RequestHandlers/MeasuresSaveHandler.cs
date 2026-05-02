using MyRow = Company.Sales.MeasuresRow;

namespace Company.Sales;

public interface IMeasuresSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class MeasuresSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IMeasuresSaveHandler
{
}