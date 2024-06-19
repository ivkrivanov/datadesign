using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.ProductLangRow>;
using MyRow = Company.Store.ProductLangRow;

namespace Company.Store;
public interface IProductLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ProductLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangListHandler
{
    public ProductLangListHandler(IRequestContext context)
         : base(context)
    {
    }
}