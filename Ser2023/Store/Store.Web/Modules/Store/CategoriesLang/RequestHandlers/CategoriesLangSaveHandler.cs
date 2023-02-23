using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Store.Entities.CategoriesLangRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Store.Entities.CategoriesLangRow;

namespace Store.Store
{
    public interface ICategoriesLangSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesLangSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangSaveHandler
    {
        public CategoriesLangSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}