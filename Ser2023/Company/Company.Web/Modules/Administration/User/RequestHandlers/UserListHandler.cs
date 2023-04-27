using Serenity.Data;
using Serenity.Services;
using MyRequest = Company.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Administration.UserRow>;
using MyRow = Company.Administration.UserRow;

namespace Company.Administration
{
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