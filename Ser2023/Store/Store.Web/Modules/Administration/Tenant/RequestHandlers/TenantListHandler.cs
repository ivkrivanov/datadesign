namespace Store.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.TenantRow>;
    using MyRow = Entities.TenantRow;

    public interface ITenantListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class TenantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITenantListHandler
    {
        public TenantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
