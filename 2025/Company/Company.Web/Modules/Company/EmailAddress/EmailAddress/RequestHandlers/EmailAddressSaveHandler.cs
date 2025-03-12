using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.EmailAddressRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.EmailAddressRow;

namespace Company.Company;

public interface IEmailAddressSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class EmailAddressSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmailAddressSaveHandler
{
    public EmailAddressSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}