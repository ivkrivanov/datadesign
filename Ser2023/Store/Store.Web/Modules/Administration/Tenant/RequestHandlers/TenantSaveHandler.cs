
namespace Store.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.TenantRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.TenantRow;

    public interface ITenantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class TenantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantSaveHandler
    {
        public TenantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
