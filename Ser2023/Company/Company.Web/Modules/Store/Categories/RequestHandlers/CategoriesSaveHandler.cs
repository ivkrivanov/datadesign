using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.CategoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.CategoriesRow;

namespace Company.Store
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