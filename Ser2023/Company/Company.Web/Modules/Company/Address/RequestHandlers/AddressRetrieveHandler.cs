using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.AddressRow>;
using MyRow = Company.Company.AddressRow;

namespace Company.Company;

public interface IAddressRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class AddressRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressRetrieveHandler
{
    public AddressRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}