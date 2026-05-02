using MyRow = Company.Sales.DocumentTypeRow;

namespace Company.Sales;

public interface IDocumentTypeDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class DocumentTypeDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IDocumentTypeDeleteHandler
{
}