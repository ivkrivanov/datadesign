using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Address.AddressTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Address.AddressTypeRow;

namespace Address.Address
{
    public interface IAddressTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeSaveHandler
    {
        public AddressTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}