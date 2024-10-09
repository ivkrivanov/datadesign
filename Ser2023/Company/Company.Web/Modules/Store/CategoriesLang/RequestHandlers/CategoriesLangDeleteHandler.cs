using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.CategoriesLangRow;

namespace Company.Store;

public interface ICategoriesLangDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesLangDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangDeleteHandler
{
    public CategoriesLangDeleteHandler(IRequestContext context)
         : base(context)
    {
    }
}