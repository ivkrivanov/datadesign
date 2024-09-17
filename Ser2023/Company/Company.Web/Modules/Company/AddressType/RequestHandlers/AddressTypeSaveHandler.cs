using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.AddressTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.AddressTypeRow;

namespace Company.Company
{

    public interface IAddressTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

    public class AddressTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeSaveHandler
    {
        public AddressTypeSaveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}