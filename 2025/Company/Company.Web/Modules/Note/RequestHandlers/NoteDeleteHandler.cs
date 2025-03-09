using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.NoteRow;

namespace Company;

public interface INoteDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class NoteDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteDeleteHandler
{
}