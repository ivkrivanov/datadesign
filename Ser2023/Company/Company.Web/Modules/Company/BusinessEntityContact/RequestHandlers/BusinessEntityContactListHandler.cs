using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.BusinessEntityContactRow>;
using MyRow = Company.Company.BusinessEntityContactRow;

namespace Company.Company;

public interface IBusinessEntityContactListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityContactListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityContactListHandler
{
    public BusinessEntityContactListHandler(IRequestContext context)
            : base(context)
    {
    }
}