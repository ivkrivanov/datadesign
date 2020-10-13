
namespace CoreStore.Reports.Endpoints
{
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.WaresFileRepository;
    using MyRow = Store.Entities.WaresFileRow;

    [Route("Services/Reports/WaresFile"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class WaresFileController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, WaresFileListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, WaresFileListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.WaresFileColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "WaresFile_" +
                DateTime.Now.ToString("ddMMyyyy_HHmmss") + ".xlsx");
        }
    }
}