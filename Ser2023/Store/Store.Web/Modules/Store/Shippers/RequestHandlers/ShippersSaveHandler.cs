
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.ShippersRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.ShippersRow;

    public interface IShippersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersSaveHandler
    {
        public ShippersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}