using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.AddressTypeRow>;
using MyRow = Company.Company.AddressTypeRow;

namespace Company.Company;

public interface IAddressTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class AddressTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAddressTypeListHandler
{
    public AddressTypeListHandler(IRequestContext context)
            : base(context)
    {
    }
}