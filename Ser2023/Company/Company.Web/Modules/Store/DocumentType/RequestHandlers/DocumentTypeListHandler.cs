using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.DocumentTypeRow>;
using MyRow = Company.Store.DocumentTypeRow;

namespace Company.Store;

public interface IDocumentTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class DocumentTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeListHandler
{
    public DocumentTypeListHandler(IRequestContext context)
            : base(context)
    {
    }
}