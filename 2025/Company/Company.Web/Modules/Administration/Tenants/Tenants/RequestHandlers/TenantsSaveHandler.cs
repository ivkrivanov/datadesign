using MyRequest = Serenity.Services.SaveRequest<Company.Administration.TenantsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Administration.TenantsRow;

namespace Company.Administration;

public interface ITenantsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsSaveHandler
{
    public TenantsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}