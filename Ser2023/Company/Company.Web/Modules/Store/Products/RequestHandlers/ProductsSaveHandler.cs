using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.ProductsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.ProductsRow;

namespace Company.Store;

public interface IProductsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductsSaveHandler
{
    public ProductsSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}