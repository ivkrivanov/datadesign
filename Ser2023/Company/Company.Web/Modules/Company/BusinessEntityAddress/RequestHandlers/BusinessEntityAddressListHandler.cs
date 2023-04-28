using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.BusinessEntityAddressRow>;
using MyRow = Company.Company.BusinessEntityAddressRow;

namespace Company.Company;

public interface IBusinessEntityAddressListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityAddressListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityAddressListHandler
{
    public BusinessEntityAddressListHandler(IRequestContext context)
            : base(context)
    {
    }
}