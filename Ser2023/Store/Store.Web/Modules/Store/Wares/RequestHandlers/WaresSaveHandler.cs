
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.WaresRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.WaresRow;

    public interface IWaresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresSaveHandler
    {
        public WaresSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}