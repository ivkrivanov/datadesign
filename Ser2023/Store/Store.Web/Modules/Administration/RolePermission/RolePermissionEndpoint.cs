

namespace Store.Administration.Endpoints
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using MyRepository = Store.Administration.Repositories.RolePermissionRepository;
    using MyRow = Store.Administration.RolePermissionRow;

    [Route("Services/Administration/RolePermission/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RolePermissionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request,
            [FromServices] ITypeSource typeSource)
        {
            return new MyRepository(Context, typeSource).Update(uow, request);
        }

        public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request,
            [FromServices] ITypeSource typeSource)
        {
            return new MyRepository(Context, typeSource).List(connection, request);
        }
    }
}
