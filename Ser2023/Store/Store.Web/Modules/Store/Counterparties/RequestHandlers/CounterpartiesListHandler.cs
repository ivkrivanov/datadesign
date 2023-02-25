
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.CounterpartiesRow>;
    using MyRow = Entities.CounterpartiesRow;

    public interface ICounterpartiesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CounterpartiesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesListHandler
    {
        public CounterpartiesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}