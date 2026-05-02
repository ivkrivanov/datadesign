
namespace Store.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.TenantRow>;
    using MyRow = Entities.TenantRow;

    public interface ITenantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class TenantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantRetrieveHandler
    {
        public TenantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
