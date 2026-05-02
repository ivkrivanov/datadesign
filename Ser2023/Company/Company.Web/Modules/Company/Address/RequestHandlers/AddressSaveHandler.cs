using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.AddressRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.AddressRow;

namespace Company.Company;

public interface IAddressSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class AddressSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAddressSaveHandler
{
    public AddressSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}