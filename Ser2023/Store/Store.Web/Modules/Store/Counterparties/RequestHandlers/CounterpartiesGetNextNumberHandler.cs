

namespace Store.Store
{
    using Serenity.Extensions;
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.CounterpartiesRow;

    public interface ICounterpartiesGetNextNumberHandler : IRequestHandler
    {
        GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request);
    }

    public class CounterpartiesGetNextNumberHandler : ICounterpartiesGetNextNumberHandler
    {
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.CounterpartyId);
        }
    }
}

