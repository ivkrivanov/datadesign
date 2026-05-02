
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.NotesRow>;
    using MyRow = Entities.NotesRow;

    public interface INotesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class NotesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INotesListHandler
    {
        public NotesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}