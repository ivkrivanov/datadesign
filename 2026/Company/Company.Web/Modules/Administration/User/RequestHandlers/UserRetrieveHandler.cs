using MyRow = Company.Administration.UserRow;

namespace Company.Administration;
public interface IUserRetrieveHandler : IRetrieveHandler<MyRow> { }

public class UserRetrieveHandler(IRequestContext context)
    : RetrieveRequestHandler<MyRow>(context), IUserRetrieveHandler
{
    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);

        if (!Permissions.HasPermission(PermissionKeys.Tenants))
            query.Where(MyRow.Fields.TenantId == (Int32)User.GetTenantId());
    }
}