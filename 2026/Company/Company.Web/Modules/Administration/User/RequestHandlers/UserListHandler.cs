using MyRow = Company.Administration.UserRow;

namespace Company.Administration;
public interface IUserListHandler : IListHandler<MyRow, UserListRequest, ListResponse<MyRow>> { }

public class UserListHandler(IRequestContext context)
    : ListRequestHandler<MyRow, UserListRequest, ListResponse<MyRow>>(context), IUserListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (Permissions.HasPermission(PermissionKeys.Tenants))
            return;

        query.Where(MyRow.Fields.TenantId == (Int32)User.GetTenantId());
    }
}