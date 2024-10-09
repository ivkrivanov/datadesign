using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.NotesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.NotesRow;

namespace Company.Store;

public interface INotesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class NotesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INotesSaveHandler
{
    public NotesSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
