﻿using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRepository = Address.Administration.Repositories.RolePermissionRepository;
using MyRow = Address.Administration.RolePermissionRow;

namespace Address.Administration.Endpoints
{
    [Route("Services/Administration/RolePermission/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RolePermissionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
    }
}
