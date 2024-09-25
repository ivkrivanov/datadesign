using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.OrderRow>;
using MyRow = Company.Store.OrderRow;

namespace Company.Store;

public interface IOrderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class OrderRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOrderRetrieveHandler
{
    public OrderRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}