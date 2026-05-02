using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.OrderDetailRow>;
using MyRow = Company.Store.OrderDetailRow;

namespace Company.Store;

public interface IOrderDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class OrderDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOrderDetailListHandler
{
    public OrderDetailListHandler(IRequestContext context)
            : base(context)
    {
    }
}