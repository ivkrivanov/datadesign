﻿
namespace Ledger.HR.Endpoints
{
    using System.Data;
    using System.Web.Mvc;
    using Serenity.Data;
    using Serenity.Services;
    using MyRepository = Repositories.EmployeeEmailRepository;
    using MyRow = Entities.EmployeeEmailRow;

    [RoutePrefix("Services/HR/EmployeeEmail"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(HR.PermissionKeys.General)]
    public class EmployeeEmailController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
