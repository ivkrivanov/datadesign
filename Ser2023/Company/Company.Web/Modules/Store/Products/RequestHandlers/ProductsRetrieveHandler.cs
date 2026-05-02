using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.ProductsRow>;
using MyRow = Company.Store.ProductsRow;

namespace Company.Store;

public interface IProductsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductsRetrieveHandler
{
    public ProductsRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}