using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.WaresOrderDetailRow>;
using MyRow = Company.Store.WaresOrderDetailRow;

namespace Company.Store;

public interface IWaresOrderDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class WaresOrderDetailListHandler :
    ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderDetailListHandler
{
    public WaresOrderDetailListHandler(IRequestContext context)
         : base(context)
    {
    }
}