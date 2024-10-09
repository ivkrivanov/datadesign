using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.CounterpartiesRow>;
using MyRow = Company.Store.CounterpartiesRow;

namespace Company.Store;

public interface ICounterpartiesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartiesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesListHandler
{
    public CounterpartiesListHandler(IRequestContext context)
         : base(context)
    {
    }
}