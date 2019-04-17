
namespace Store.Store.Endpoints
{
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.WaresMovementTotalRepository;
    using MyRow = Store.Entities.WaresMovementTotalRow;

    [RoutePrefix("Services/Store/WaresMovementTotal"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class WaresMovementTotalController : ServiceEndpoint
    {
        public ListResponse<MyRow> List(IDbConnection connection, WaresMovementTotalListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}