using MyRow = Company.Sales.CategoriesTypeLangRow;

namespace Company.Sales;

public interface ICategoriesTypeLangListHandler : IListHandler<MyRow> { }

public class CategoriesTypeLangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow>(context), ICategoriesTypeLangListHandler
{
}