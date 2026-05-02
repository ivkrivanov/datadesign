
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.ProductsRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.ProductsRow;


    public interface IProductsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductsSaveHandler
    {
        public ProductsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}