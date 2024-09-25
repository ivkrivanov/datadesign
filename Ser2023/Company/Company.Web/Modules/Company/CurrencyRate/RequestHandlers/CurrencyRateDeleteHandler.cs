using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.CurrencyRateRow;

namespace Company.Company.RequestHandlers;

public interface ICurrencyRateDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class CurrencyRateDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyRateDeleteHandler
{
    public CurrencyRateDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}