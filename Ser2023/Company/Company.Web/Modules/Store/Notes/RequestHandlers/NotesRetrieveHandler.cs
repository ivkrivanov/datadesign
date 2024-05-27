using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.NotesRow>;
using MyRow = Company.Store.NotesRow;

namespace Company.Store;

public interface INotesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class NotesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INotesRetrieveHandler
{
    public NotesRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}
