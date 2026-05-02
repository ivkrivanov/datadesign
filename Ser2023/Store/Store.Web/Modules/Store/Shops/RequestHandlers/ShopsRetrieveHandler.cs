
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.ShopsRow>;
    using MyRow = Entities.ShopsRow;
    public interface IShopsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShopsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IShopsRetrieveHandler
    {
        public ShopsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}