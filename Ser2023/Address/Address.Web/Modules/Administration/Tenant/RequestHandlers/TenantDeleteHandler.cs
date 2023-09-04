namespace Address.Administration
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = TenantRow;

    public interface ITenantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

    public class TenantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITenantDeleteHandler
    {
        public TenantDeleteHandler(IRequestContext context)
            : base(context)
        {
        }
    }
}