using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Store.Store.Entities.CategoriesLangRow>;
using MyRow = Store.Store.Entities.CategoriesLangRow;

namespace Store.Store
{
    public interface ICategoriesLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangRetrieveHandler
    {
        public CategoriesLangRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}