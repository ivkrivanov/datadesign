using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.CurrencyRateRow>;
using MyRow = Company.Company.CurrencyRateRow;

namespace Company.Company.RequestHandlers;

public interface ICurrencyRateRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class CurrencyRateRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyRateRetrieveHandler
{
    public CurrencyRateRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}