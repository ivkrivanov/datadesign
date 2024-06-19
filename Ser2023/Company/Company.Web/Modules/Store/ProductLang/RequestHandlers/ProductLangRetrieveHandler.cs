using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.ProductLangRow>;
using MyRow = Company.Store.ProductLangRow;

namespace Company.Store;
public interface IProductLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ProductLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangRetrieveHandler
{
    public ProductLangRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}