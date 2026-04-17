using MyRow = Company.Sales.CategoriesTypeRow;

namespace Company.Sales;

public interface ICategoriesTypeDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class CategoriesTypeDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ICategoriesTypeDeleteHandler
{
}