using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Address.Address.AddressTypeRow>;
using MyRow = Address.Address.AddressTypeRow;

namespace Address.Address
{
    public interface IAddressTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeListHandler
    {
        public AddressTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}