using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.WaresLangRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.WaresLangRow;

namespace Company.Store;

public interface IWaresLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangSaveHandler
{
    public WaresLangSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}