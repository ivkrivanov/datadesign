using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.CategoriesLangRow>;
using MyRow = Company.Store.CategoriesLangRow;

namespace Company.Store;

public interface ICategoriesLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangListHandler
{
    public CategoriesLangListHandler(IRequestContext context)
         : base(context)
    {
    }
}