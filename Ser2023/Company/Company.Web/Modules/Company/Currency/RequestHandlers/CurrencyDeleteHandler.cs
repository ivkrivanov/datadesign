using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.CurrencyRow;

namespace Company.Company;

public interface ICurrencyDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CurrencyDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICurrencyDeleteHandler
{
    public CurrencyDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}