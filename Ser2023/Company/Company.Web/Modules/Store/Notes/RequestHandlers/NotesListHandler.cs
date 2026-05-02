using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.NotesRow>;
using MyRow = Company.Store.NotesRow;

namespace Company.Store;
public interface INotesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class NotesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INotesListHandler
{
    public NotesListHandler(IRequestContext context)
            : base(context)
    {
    }
}
