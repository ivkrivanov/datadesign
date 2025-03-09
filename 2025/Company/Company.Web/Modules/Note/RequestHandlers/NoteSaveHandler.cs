using MyRequest = Serenity.Services.SaveRequest<Company.NoteRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.NoteRow;

namespace Company;

public interface INoteSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class NoteSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteSaveHandler
{
}