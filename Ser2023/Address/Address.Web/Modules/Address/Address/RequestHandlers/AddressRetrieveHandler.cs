using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Address.Address.AddressRow>;
using MyRow = Address.Address.AddressRow;

namespace Address.Address
{
    public interface IAddressRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressRetrieveHandler
    {
        public AddressRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}