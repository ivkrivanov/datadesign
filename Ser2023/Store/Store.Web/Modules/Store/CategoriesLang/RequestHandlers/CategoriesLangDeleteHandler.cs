using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Store.Store.Entities.CategoriesLangRow;

namespace Store.Store
{
    public interface ICategoriesLangDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesLangDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangDeleteHandler
    {
        public CategoriesLangDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}