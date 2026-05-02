
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.NotesRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.NotesRow;

    public interface INotesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class NotesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INotesSaveHandler
    {
        public NotesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}