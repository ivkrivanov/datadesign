using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.DocumentTypeRow>;
using MyRow = Company.Store.DocumentTypeRow;

namespace Company.Store;

public interface IDocumentTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class DocumentTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeRetrieveHandler
{
    public DocumentTypeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}