using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Store.Store.Entities.CategoriesLangRow>;
using MyRow = Store.Store.Entities.CategoriesLangRow;

namespace Store.Store
{
    public interface ICategoriesLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangListHandler
    {
        public CategoriesLangListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}