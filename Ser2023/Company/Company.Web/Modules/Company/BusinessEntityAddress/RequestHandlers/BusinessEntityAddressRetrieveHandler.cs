using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.BusinessEntityAddressRow>;
using MyRow = Company.Company.BusinessEntityAddressRow;

namespace Company.Company;

public interface IBusinessEntityAddressRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityAddressRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityAddressRetrieveHandler
{
    public BusinessEntityAddressRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}