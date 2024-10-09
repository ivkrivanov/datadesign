using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.CategoriesLangRow>;
using MyRow = Company.Store.CategoriesLangRow;

namespace Company.Store;

public interface ICategoriesLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesLangRetrieveHandler
{
    public CategoriesLangRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}