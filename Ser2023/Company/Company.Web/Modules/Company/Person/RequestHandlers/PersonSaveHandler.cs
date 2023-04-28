using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.PersonRow;

namespace Company.Company;

public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
{
    public PersonSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}