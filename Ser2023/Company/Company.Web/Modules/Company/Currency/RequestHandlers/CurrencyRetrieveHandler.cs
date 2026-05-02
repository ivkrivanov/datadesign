using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.CurrencyRow>;
using MyRow = Company.Company.CurrencyRow;

namespace Company.Company;

public interface ICurrencyRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CurrencyRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyRetrieveHandler
{
    public CurrencyRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}