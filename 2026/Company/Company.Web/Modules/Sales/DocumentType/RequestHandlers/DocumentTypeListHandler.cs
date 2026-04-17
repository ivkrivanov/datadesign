using MyRow = Company.Sales.DocumentTypeRow;

namespace Company.Sales;

public interface IDocumentTypeListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class DocumentTypeListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IDocumentTypeListHandler
{
}