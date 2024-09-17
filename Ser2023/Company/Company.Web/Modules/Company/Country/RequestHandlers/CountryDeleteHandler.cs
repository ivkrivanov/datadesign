using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.CountryRow;

namespace Company.Company;

public interface ICountryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CountryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICountryDeleteHandler
{
    public CountryDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}