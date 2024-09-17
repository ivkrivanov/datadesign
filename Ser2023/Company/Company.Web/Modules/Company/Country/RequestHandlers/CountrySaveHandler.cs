using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.CountryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.CountryRow;

namespace Company.Company;

public interface ICountrySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CountrySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICountrySaveHandler
{
    public CountrySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}