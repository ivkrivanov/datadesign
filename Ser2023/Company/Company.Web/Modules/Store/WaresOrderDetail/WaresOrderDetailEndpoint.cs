using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRow = Company.Store.WaresOrderDetailRow;

namespace Company.Store.Endpoints;

[Route("Services/Store/WaresOrderDetail/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class WaresOrderDetailEndpoint : ServiceEndpoint
{
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IWaresOrderDetailRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IWaresOrderDetailListHandler handler)
    {
        return handler.List(connection, request);
    }
}
