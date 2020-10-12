
namespace CoreStore.Reports.Endpoints
{
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.StoreMoveRepository;
    using MyRow = Store.Entities.StoreMoveRow;

    [Route("Services/Reports/StoreMove"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class StoreMoveController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, StoreMoveListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, StoreMoveListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.StoreMoveColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "StoreMove_" +
                DateTime.Now.ToString("ddMMyyyy_HHmmss") + ".xlsx");
        }
    }
}