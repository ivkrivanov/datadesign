using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.ProductDetailsRow>;
using MyRow = Company.Store.ProductDetailsRow;

namespace Company.Store;

public interface IProductDetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ProductDetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsListHandler
{
    public ProductDetailsListHandler(IRequestContext context)
         : base(context)
    {
    }
}