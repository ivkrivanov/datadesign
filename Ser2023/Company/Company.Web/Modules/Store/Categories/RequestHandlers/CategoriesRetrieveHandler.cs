using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.CategoriesRow>;
using MyRow = Company.Store.CategoriesRow;

namespace Company.Store;
public interface ICategoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CategoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesRetrieveHandler
{
    public CategoriesRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}