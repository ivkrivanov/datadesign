using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.AddressTypeRow>;
using MyRow = Company.Company.AddressTypeRow;

namespace Company.Company;

public interface IAddressTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class AddressTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeRetrieveHandler
{
    public AddressTypeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}