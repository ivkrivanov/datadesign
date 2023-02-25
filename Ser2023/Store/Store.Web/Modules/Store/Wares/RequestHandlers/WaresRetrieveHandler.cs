
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.WaresRow>;
    using MyRow = Entities.WaresRow;
    public interface IWaresRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresRetrieveHandler
    {
        public WaresRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}