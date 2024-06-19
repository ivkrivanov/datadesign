using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.ProductDetailsRow>;
using MyRow = Company.Store.ProductDetailsRow;

namespace Company.Store;

public interface IProductDetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductDetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsRetrieveHandler
{
    public ProductDetailsRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}