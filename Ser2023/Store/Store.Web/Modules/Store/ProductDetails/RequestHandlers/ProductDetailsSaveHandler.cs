
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.ProductDetailsRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.ProductDetailsRow;
    public interface IProductDetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductDetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsSaveHandler
    {
        public ProductDetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}