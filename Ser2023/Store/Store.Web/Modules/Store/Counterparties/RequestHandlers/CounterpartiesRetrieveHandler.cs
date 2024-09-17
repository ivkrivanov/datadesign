
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.CounterpartiesRow>;
    using MyRow = Entities.CounterpartiesRow;

    public interface ICounterpartiesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CounterpartiesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesRetrieveHandler
    {
        public CounterpartiesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}