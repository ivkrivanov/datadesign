using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Store.Store.Entities.NotesRow>;
using MyRow = Store.Store.Entities.NotesRow;

namespace Store.Store
{
    public interface INoteRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

    public class NoteRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INoteRetrieveHandler
    {
        public NoteRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}