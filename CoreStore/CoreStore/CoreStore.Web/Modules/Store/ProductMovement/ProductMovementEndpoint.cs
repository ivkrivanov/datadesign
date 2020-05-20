
namespace CoreStore.Store.Endpoints
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using MyRepository = Repositories.ProductMovementRepository;
    using MyRow = Entities.ProductMovementRow;

    [Route("Services/Store/ProductMovement/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProductMovementController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ProductMovementListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ProductMovementListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ProductMovementColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "ProductMovementList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
