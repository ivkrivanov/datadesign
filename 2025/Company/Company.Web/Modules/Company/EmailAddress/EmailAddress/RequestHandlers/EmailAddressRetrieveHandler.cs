using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.EmailAddressRow>;
using MyRow = Company.Company.EmailAddressRow;

namespace Company.Company;

public interface IEmailAddressRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class EmailAddressRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmailAddressRetrieveHandler
{
    public EmailAddressRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}