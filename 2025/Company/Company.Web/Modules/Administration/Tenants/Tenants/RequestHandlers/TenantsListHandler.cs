using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Administration.TenantsRow>;
using MyRow = Company.Administration.TenantsRow;

namespace Company.Administration;

public interface ITenantsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsListHandler
{
    public TenantsListHandler(IRequestContext context)
            : base(context)
    {
    }
}