using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.EmailAddressRow>;
using MyRow = Company.Company.EmailAddressRow;

namespace Company.Company;

public interface IEmailAddressListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class EmailAddressListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmailAddressListHandler
{
    public EmailAddressListHandler(IRequestContext context)
            : base(context)
    {
    }
}