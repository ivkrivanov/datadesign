using MyRow = Company.Administration.UserRow;
using MyRequest = Company.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Administration.UserRow>;

namespace Company.Administration;

public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (Permissions.HasPermission(PermissionKeys.Tenants))
            return;

        query.Where(MyRow.Fields.TenantId == (Int32)User.GetTenantId());
    }
}