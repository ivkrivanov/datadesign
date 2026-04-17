using MyRow = Company.Sales.CategoriesTypeRow;

namespace Company.Sales;

public interface ICategoriesTypeSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class CategoriesTypeSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ICategoriesTypeSaveHandler
{
}