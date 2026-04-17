using MyRow = Company.Sales.CategoriesTypeLangRow;

namespace Company.Sales;

public interface ICategoriesTypeLangDeleteHandler : IDeleteHandler<MyRow> { }

public class CategoriesTypeLangDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow>(context), ICategoriesTypeLangDeleteHandler
{
}