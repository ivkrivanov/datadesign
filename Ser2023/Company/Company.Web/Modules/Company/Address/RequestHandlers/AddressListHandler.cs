using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.AddressRow>;
using MyRow = Company.Company.AddressRow;

namespace Company.Company;

public interface IAddressListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class AddressListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAddressListHandler
{
    public AddressListHandler(IRequestContext context)
            : base(context)
    {
    }
}