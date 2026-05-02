using MyRow = Company.Sales.CategoriesTypeLangRow;

namespace Company.Sales;

public interface ICategoriesTypeLangRetrieveHandler : IRetrieveHandler<MyRow> { }

public class CategoriesTypeLangRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow>(context), ICategoriesTypeLangRetrieveHandler
{
}