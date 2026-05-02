using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.CounterpartiesRow>;
using MyRow = Company.Store.CounterpartiesRow;

namespace Company.Store;

public interface ICounterpartiesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartiesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesRetrieveHandler
{
    public CounterpartiesRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}