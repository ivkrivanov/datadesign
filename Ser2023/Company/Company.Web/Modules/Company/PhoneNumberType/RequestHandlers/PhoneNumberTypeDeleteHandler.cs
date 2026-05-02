using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.PhoneNumberTypeRow;

namespace Company.Company;

public interface IPhoneNumberTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class PhoneNumberTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPhoneNumberTypeDeleteHandler
{
    public PhoneNumberTypeDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}