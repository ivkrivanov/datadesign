using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Store.Entities.DocumentTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Store.Entities.DocumentTypeRow;

namespace Store.Store
{
    public interface IDocumentTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeSaveHandler
    {
        public DocumentTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}