using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.OrderDetailRow;

namespace Company.Store;

public interface IOrderDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class OrderDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOrderDetailDeleteHandler
{
    public OrderDetailDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}