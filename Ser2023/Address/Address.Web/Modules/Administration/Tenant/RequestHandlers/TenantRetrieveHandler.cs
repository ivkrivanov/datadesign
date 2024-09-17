
namespace Address.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<TenantRow>;
    using MyRow = TenantRow;

    public interface ITenantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class TenantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantRetrieveHandler
    {
        public TenantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
