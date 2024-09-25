using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.OrderDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.OrderDetailRow;

namespace Company.Store;

public interface IOrderDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class OrderDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOrderDetailSaveHandler
{
    public OrderDetailSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}