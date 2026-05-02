using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRow = Company.Store.ProductDetailsRow;

namespace Company.Store.Endpoints;

[Route("Services/Store/ProductDetails/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class ProductDetailsController : ServiceEndpoint
{
    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IProductDetailsRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IProductDetailsListHandler handler)
    {
        return handler.List(connection, request);
    }
}