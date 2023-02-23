using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Store.Store.Entities.DocumentTypeRow>;
using MyRow = Store.Store.Entities.DocumentTypeRow;

namespace Store.Store
{
    public interface IDocumentTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeRetrieveHandler
    {
        public DocumentTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}