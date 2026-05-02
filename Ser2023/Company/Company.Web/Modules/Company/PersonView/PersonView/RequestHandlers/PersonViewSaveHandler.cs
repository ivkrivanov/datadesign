using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.PersonViewRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.PersonViewRow;

namespace Company.Company;

public interface IPersonViewSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonViewSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonViewSaveHandler
{
    public PersonViewSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}