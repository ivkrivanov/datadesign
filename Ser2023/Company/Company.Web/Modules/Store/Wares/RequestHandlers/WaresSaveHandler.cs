using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.WaresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.WaresRow;

namespace Company.Store;
public interface IWaresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresSaveHandler
{
    public WaresSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}