using MyRow = Company.Sales.CategoriesTypeRow;

namespace Company.Sales;

public interface ICategoriesTypeRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class CategoriesTypeRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ICategoriesTypeRetrieveHandler
{
}