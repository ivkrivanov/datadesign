using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Address.Address.CountryRow>;
using MyRow = Address.Address.CountryRow;

namespace Address.Address
{
    public interface ICountryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CountryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICountryRetrieveHandler
    {
        public CountryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}