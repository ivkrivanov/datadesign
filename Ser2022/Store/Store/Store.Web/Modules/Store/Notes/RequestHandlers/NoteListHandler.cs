using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Store.Store.Entities.NotesRow>;
using MyRow = Store.Store.Entities.NotesRow;

namespace Store.Store
{ 
public interface INoteListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class NoteListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INoteListHandler
    {
        public NoteListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}