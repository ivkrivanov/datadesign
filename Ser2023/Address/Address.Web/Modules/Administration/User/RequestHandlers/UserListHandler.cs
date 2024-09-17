
namespace Address.Administration
{
    using Serenity.Data;
    using Serenity.Services;
    using MyRequest = UserListRequest;
    using MyResponse = Serenity.Services.ListResponse<UserRow>;
    using MyRow = UserRow;

    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }

        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            if (!Permissions.HasPermission(PermissionKeys.Tenants))
                query.Where(Fld.TenantId == User.GetTenantId());
        }

        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);

            if (Permissions.HasPermission(PermissionKeys.Tenants))
                return;

            query.Where(Fld.TenantId == User.GetTenantId());
        }
    }
}