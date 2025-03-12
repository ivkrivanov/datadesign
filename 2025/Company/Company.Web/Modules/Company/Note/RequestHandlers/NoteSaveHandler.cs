using MyRequest = Serenity.Services.SaveRequest<Company.Company.NoteRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.NoteRow;

namespace Company.Company;
public interface INoteSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class NoteSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, MyRequest, MyResponse>(context), INoteSaveHandler
{
}