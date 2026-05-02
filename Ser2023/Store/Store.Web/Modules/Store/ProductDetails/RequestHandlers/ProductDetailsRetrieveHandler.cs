
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.ProductDetailsRow>;
    using MyRow = Entities.ProductDetailsRow;

    public interface IProductDetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductDetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductDetailsRetrieveHandler
    {
        public ProductDetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}