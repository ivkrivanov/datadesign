using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.WaresOrderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.WaresOrderRow;

namespace Company.Store;

public interface IWaresOrderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class WaresOrderSaveHandler: SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderSaveHandler
{
    public WaresOrderSaveHandler(IRequestContext context) : base(context)
    {
    }
}