
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.ProductLangRow>;
    using MyRow = Entities.ProductLangRow;
    public interface IProductLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangListHandler
    {
        public ProductLangListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}