using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Default.TenantsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Default.TenantsRow;

namespace Company.Default;

public interface ITenantsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsSaveHandler
{
    public TenantsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}