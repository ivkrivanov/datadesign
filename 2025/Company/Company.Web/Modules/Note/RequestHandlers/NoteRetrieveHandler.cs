using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.NoteRow>;
using MyRow = Company.NoteRow;

namespace Company;

public interface INoteRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class NoteRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteRetrieveHandler
{
}