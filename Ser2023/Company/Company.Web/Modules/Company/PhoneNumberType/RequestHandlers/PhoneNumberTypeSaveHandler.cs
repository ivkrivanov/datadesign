using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.PhoneNumberTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.PhoneNumberTypeRow;

namespace Company.Company;

public interface IPhoneNumberTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class PhoneNumberTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPhoneNumberTypeSaveHandler
{
    public PhoneNumberTypeSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}