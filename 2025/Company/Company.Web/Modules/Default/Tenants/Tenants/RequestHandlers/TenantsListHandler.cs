using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Default.TenantsRow>;
using MyRow = Company.Default.TenantsRow;

namespace Company.Default;

public interface ITenantsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsListHandler
{
    public TenantsListHandler(IRequestContext context)
            : base(context)
    {
    }
}