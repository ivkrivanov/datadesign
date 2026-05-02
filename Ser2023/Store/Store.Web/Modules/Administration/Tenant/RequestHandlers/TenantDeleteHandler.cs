namespace Store.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.TenantRow;

    public interface ITenantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

    public class TenantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITenantDeleteHandler
    {
        public TenantDeleteHandler(IRequestContext context)
            : base(context)
        {
        }
    }
}
