using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.ProductDetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.ProductDetailsRow;

namespace Company.Store;

public interface IProductDetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductDetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsSaveHandler
{
    public ProductDetailsSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}