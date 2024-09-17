using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.PhoneNumberTypeRow>;
using MyRow = Company.Company.PhoneNumberTypeRow;

namespace Company.Company;

public interface IPhoneNumberTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class PhoneNumberTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPhoneNumberTypeListHandler
{
    public PhoneNumberTypeListHandler(IRequestContext context)
            : base(context)
    {
    }
}