
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.NotesRow>;
    using MyRow = Entities.NotesRow;

    public interface INotesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class NotesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INotesRetrieveHandler
    {
        public NotesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}