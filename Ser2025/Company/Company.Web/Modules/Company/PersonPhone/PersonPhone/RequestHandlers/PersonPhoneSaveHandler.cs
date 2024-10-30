using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.PersonPhoneRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.PersonPhoneRow;

namespace Company.Company;

public interface IPersonPhoneSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonPhoneSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonPhoneSaveHandler
{
    public PersonPhoneSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}