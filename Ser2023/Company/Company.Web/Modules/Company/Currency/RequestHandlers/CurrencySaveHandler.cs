using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.CurrencyRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.CurrencyRow;

namespace Company.Company;

public interface ICurrencySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CurrencySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencySaveHandler
{
    public CurrencySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}