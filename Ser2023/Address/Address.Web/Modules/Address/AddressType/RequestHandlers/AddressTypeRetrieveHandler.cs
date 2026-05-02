using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Address.Address.AddressTypeRow>;
using MyRow = Address.Address.AddressTypeRow;

namespace Address.Address
{
    public interface IAddressTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeRetrieveHandler
    {
        public AddressTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}