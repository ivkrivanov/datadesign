using MyRow = Company.Sales.DocumentTypeRow;

namespace Company.Sales;

public interface IDocumentTypeSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class DocumentTypeSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IDocumentTypeSaveHandler
{
}