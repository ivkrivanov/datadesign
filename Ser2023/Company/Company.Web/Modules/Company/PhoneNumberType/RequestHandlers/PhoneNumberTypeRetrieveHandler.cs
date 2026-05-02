using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.PhoneNumberTypeRow>;
using MyRow = Company.Company.PhoneNumberTypeRow;

namespace Company.Company;

public interface IPhoneNumberTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class PhoneNumberTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPhoneNumberTypeRetrieveHandler
{
    public PhoneNumberTypeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}