using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Address.Address.AddressRow>;
using MyRow = Address.Address.AddressRow;

namespace Address.Address
{
    public interface IAddressListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAddressListHandler
    {
        public AddressListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}