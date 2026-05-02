
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.ProductLangRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.ProductLangRow;
    public interface IProductLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangSaveHandler
    {
        public ProductLangSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}