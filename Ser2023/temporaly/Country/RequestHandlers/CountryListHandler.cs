using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Address.Address.CountryRow>;
using MyRow = Address.Address.CountryRow;

namespace Address.Address
{
    public interface ICountryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CountryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICountryListHandler
    {
        public CountryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}