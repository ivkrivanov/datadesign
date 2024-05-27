using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.CategoriesRow>;
using MyRow = Company.Store.CategoriesRow;

namespace Company.Store;

public interface ICategoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesListHandler
{
    public CategoriesListHandler(IRequestContext context)
         : base(context)
    {
    }
}