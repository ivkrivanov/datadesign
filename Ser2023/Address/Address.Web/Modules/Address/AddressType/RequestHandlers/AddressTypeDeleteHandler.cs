using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Address.Address.AddressTypeRow;

namespace Address.Address
{
    public interface IAddressTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AddressTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeDeleteHandler
    {
        public AddressTypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}