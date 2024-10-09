using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.OrderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.OrderRow;

namespace Company.Store;

public interface IOrderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class OrderSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOrderSaveHandler
{
    public OrderSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}