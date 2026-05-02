using MyRepository = Company.Administration.Repositories.UserPermissionRepository;
using MyRow = Company.Administration.UserPermissionRow;

namespace Company.Administration.Endpoints;
[Route("Services/Administration/UserPermission/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class UserPermissionEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, UserPermissionUpdateRequest request,
        [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new MyRepository(Context, permissionKeyLister).Update(uow, request);
    }

    public ListResponse<MyRow> List(IDbConnection connection, UserPermissionListRequest request,
        [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new MyRepository(Context, permissionKeyLister).List(connection, request);
    }

    public ListResponse<string> ListRolePermissions(IDbConnection connection, UserPermissionListRequest request,
        [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new MyRepository(Context, permissionKeyLister).ListRolePermissions(connection, request);
    }

    public ListResponse<string> ListPermissionKeys(
        [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new ListResponse<string>
        {
            Entities = permissionKeyLister.ListPermissionKeys(includeRoles: false).ToList()
        };
    }
}