using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.WaresOrderDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.WaresOrderDetailRow;

namespace Company.Store;

public interface IWaresOrdertDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresOrderDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrdertDetailSaveHandler
{
    public WaresOrderDetailSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}