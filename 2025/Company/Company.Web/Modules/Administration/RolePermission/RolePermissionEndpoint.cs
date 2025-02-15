using Company.AppServices;
using MyRepository = Company.Administration.Repositories.RolePermissionRepository;
using MyRow = Company.Administration.RolePermissionRow;

namespace Company.Administration.Endpoints;

[Route("Services/Administration/RolePermission/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class RolePermissionEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request,
        [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new MyRepository(Context, permissionKeyLister).Update(uow, request);
    }

    public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request,
    [FromServices] IPermissionKeyLister permissionKeyLister)
    {
        return new MyRepository(Context, permissionKeyLister).List(connection, request);
    }
}
