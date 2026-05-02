
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.CounterpartiesRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.CounterpartiesRow;
    public interface ICounterpartiesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CounterpartiesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesSaveHandler
    {
        public CounterpartiesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}