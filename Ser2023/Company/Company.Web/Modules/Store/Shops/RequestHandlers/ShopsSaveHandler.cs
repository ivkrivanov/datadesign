using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.ShopsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.ShopsRow;

namespace Company.Store;
public interface IShopsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ShopsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IShopsSaveHandler
{
    public ShopsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
