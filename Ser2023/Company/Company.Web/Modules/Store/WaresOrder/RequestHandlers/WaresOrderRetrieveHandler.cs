using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.WaresOrderRow>;
using MyRow = Company.Store.WaresOrderRow;

namespace Company.Store;

public interface IWaresOrderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class WaresOrderRetrieveHandler: RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderRetrieveHandler
{
    public WaresOrderRetrieveHandler(IRequestContext context) :
        base(context)
    {
    }
}
