using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.NoteRow>;
using MyRow = Company.NoteRow;

namespace Company;

public interface INoteListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class NoteListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteListHandler
{
}