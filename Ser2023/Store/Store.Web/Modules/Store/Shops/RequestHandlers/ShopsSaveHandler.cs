
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.ShopsRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.ShopsRow;
    public interface IShopsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShopsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IShopsSaveHandler
    {
        public ShopsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}