using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.ProductLangRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.ProductLangRow;

namespace Company.Store;

public interface IProductLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangSaveHandler
{
    public ProductLangSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}