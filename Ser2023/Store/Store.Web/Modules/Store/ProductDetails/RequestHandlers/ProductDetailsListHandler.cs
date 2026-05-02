
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.ProductDetailsRow>;
    using MyRow = Entities.ProductDetailsRow;
    public interface IProductDetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductDetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsListHandler
    {
        public ProductDetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}