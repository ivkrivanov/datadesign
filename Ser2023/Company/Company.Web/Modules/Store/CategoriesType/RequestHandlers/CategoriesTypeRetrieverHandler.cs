using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.CategoriesTypeRow>;
using MyRow = Company.Store.CategoriesTypeRow;

namespace Company.Store;
public interface ICategoriesTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
public class CategoriesTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeRetrieveHandler
{
    public CategoriesTypeRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}
