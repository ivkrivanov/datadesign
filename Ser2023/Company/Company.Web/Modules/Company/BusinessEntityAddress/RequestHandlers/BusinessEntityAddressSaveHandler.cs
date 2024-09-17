using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.BusinessEntityAddressRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.BusinessEntityAddressRow;

namespace Company.Company;

public interface IBusinessEntityAddressSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityAddressSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityAddressSaveHandler
{
    public BusinessEntityAddressSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}