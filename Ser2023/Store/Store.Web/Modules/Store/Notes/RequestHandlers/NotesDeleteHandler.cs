
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.NotesRow;

    public interface INotesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class NotesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, INotesDeleteHandler
    {
        public NotesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}