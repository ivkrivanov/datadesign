using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.BusinessEntityRow>;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntityListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityListHandler
{
    public BusinessEntityListHandler(IRequestContext context)
            : base(context)
    {
    }
}