using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.NoteRow>;
using MyRow = Company.Company.NoteRow;

namespace Company.Company;
public interface INoteListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class NoteListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteListHandler
{
}