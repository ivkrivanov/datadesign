using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.CategoriesTypeRow;

namespace Company.Store;

public interface ICategoriesTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class CategoriesTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeDeleteHandler
{
    public CategoriesTypeDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}