using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.CurrencyRow>;
using MyRow = Company.Company.CurrencyRow;

namespace Company.Company;

public interface ICurrencyListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CurrencyListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyListHandler
{
    public CurrencyListHandler(IRequestContext context)
            : base(context)
    {
    }
}