using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.CurrencyRateRow>;
using MyRow = Company.Company.CurrencyRateRow;

namespace Company.Company.RequestHandlers;

public interface ICurrencyRateListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class CurrencyRateListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyRateListHandler
{
    public CurrencyRateListHandler(IRequestContext context)
            : base(context)
    {
    }
}