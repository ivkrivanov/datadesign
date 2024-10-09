using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.CurrencyRateRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.CurrencyRateRow;

namespace Company.Company.RequestHandlers;

public interface ICurrencyRateSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class CurrencyRateSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyRateSaveHandler
{
    public CurrencyRateSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}