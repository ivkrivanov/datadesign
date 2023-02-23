
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.ShippersRow>;
    using MyRow = Entities.ShippersRow;

    public interface IShippersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersRetrieveHandler
    {
        public ShippersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}