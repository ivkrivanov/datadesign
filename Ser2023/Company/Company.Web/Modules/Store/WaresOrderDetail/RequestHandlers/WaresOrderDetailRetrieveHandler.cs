using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.WaresOrderDetailRow>;
using MyRow = Company.Store.WaresOrderDetailRow;

namespace Company.Store;

public interface IWaresOrderDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresOrderDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderDetailRetrieveHandler
{
    public WaresOrderDetailRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}