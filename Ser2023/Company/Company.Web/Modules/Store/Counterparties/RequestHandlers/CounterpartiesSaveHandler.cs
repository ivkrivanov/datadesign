using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.CounterpartiesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.CounterpartiesRow;

namespace Company.Store;
public interface ICounterpartiesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartiesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesSaveHandler
{
    public CounterpartiesSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}