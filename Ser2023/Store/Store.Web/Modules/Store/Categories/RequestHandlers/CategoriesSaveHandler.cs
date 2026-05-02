using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Store.Entities.CategoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Store.Entities.CategoriesRow;

namespace Store.Store
{
    public interface ICategoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesSaveHandler
    {
        public CategoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}