using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRow = Company.Store.OrderDetailRow;

namespace Company.Store.Endpoints;

[Route("Services/Store/OrderDetail/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class OrderDetailEndpoint : ServiceEndpoint
{
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IOrderDetailRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    //[HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IOrderDetailListHandler handler)
    {
        return handler.List(connection, request);
    }
}