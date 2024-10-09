using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.ShippersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.ShippersRow;

namespace Company.Store;

public interface IShippersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ShippersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersSaveHandler
{
    public ShippersSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
