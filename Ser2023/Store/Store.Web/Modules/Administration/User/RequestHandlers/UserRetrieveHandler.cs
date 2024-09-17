
namespace Store.Administration
{
    using Serenity.Data;
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.UserRow>;
    using MyRow = Entities.UserRow;

    public interface IUserRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class UserRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserRetrieveHandler
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }
        public UserRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            if (!Permissions.HasPermission(PermissionKeys.Tenants))
                query.Where(Fld.TenantId == User.GetTenantId());
        }
    }
}