
namespace Ledger.HR.Endpoints
{
    using System;
    using System.Data;
    using System.Web.Mvc;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using MyRepository = Repositories.EmployeeRepository;
    using MyRow = Entities.EmployeeRow;

    [RoutePrefix("Services/HR/Employee"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize(HR.PermissionKeys.General)]
    public class EmployeeController : ServiceEndpoint
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

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.EmployeeColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "EmployeeList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
