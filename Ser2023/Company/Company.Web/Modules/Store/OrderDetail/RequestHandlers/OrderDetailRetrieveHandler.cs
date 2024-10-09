using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.OrderDetailRow>;
using MyRow = Company.Store.OrderDetailRow;

namespace Company.Store;

public interface IOrderDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class OrderDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOrderDetailRetrieveHandler
{
    public OrderDetailRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}