using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.CategoriesLangRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.CategoriesLangRow;

namespace Company.Store;

public interface ICategoriesLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangSaveHandler
{
    public CategoriesLangSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}