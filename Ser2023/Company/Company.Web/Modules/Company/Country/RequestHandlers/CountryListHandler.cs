using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.CountryRow>;
using MyRow = Company.Company.CountryRow;

namespace Company.Company;

public interface ICountryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CountryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICountryListHandler
{
    public CountryListHandler(IRequestContext context)
            : base(context)
    {
    }
}