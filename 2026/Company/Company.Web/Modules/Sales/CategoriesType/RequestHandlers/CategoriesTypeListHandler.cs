using MyRow = Company.Sales.CategoriesTypeRow;

namespace Company.Sales;

public interface ICategoriesTypeListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class CategoriesTypeListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ICategoriesTypeListHandler
{
}