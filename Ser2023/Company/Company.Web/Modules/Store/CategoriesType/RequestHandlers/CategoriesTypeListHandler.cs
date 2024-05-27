using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.CategoriesTypeRow>;
using MyRow = Company.Store.CategoriesTypeRow;

namespace Company.Store;

public interface ICategoriesTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class CategoriesTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeListHandler
{
    public CategoriesTypeListHandler(IRequestContext context)
            : base(context)
    {
    }
}
