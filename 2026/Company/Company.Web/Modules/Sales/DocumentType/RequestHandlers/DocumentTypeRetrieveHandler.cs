using MyRow = Company.Sales.DocumentTypeRow;

namespace Company.Sales;

public interface IDocumentTypeRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class DocumentTypeRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IDocumentTypeRetrieveHandler
{
}