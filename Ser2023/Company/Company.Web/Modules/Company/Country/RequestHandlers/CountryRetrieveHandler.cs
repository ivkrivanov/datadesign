using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.CountryRow>;
using MyRow = Company.Company.CountryRow;

namespace Company.Company;

public interface ICountryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CountryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICountryRetrieveHandler
{
    public CountryRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}