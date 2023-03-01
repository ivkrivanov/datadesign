
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.ProductLangRow>;
    using MyRow = Entities.ProductLangRow;

    public interface IProductLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductLangRetrieveHandler
    {
        public ProductLangRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}