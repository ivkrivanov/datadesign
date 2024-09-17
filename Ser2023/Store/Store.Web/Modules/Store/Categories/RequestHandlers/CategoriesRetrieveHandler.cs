using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Store.Store.Entities.CategoriesRow>;
using MyRow = Store.Store.Entities.CategoriesRow;

namespace Store.Store
{
    public interface ICategoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesRetrieveHandler
    {
        public CategoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}