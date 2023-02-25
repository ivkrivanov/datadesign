using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Store.Store.Entities.CategoriesRow>;
using MyRow = Store.Store.Entities.CategoriesRow;

namespace Store.Store
{
    public interface ICategoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesListHandler
    {
        public CategoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}