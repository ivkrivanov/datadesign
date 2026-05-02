using MyRow = Company.Sales.CategoriesTypeLangRow;

namespace Company.Sales;

public interface ICategoriesTypeLangSaveHandler : ISaveHandler<MyRow> { }

public class CategoriesTypeLangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow>(context), ICategoriesTypeLangSaveHandler
{
}