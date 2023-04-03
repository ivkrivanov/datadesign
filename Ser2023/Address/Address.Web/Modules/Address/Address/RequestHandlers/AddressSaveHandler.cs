using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Address.AddressRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Address.AddressRow;

namespace Address.Address
{
    public interface IAddressSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressSaveHandler
    {
        public AddressSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}