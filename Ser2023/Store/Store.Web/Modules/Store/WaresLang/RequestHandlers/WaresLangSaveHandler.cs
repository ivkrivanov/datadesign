
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.WaresLangRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.WaresLangRow;
    public interface IWaresLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangSaveHandler
    {
        public WaresLangSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}