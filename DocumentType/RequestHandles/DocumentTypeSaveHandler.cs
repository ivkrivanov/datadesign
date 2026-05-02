using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.DocumentTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.DocumentTypeRow;

namespace Company.Store;

public interface IDocumentTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class DocumentTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeSaveHandler
{
    public DocumentTypeSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}