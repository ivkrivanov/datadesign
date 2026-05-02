using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Store.Store.Entities.DocumentTypeRow;

namespace Store.Store
{
    public interface IDocumentTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentTypeDeleteHandler
    {
        public DocumentTypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}