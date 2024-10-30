using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.EmailAddressRow;

namespace Company.Company;

public interface IEmailAddressDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class EmailAddressDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmailAddressDeleteHandler
{
    public EmailAddressDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}