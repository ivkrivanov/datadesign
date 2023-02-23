using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Store.Store.Entities.DocumentTypeRow>;
using MyRow = Store.Store.Entities.DocumentTypeRow;

namespace Store.Store
{
    public interface IDocumentTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeListHandler
    {
        public DocumentTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}