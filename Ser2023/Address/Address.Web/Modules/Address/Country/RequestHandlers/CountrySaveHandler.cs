using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Address.CountryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Address.CountryRow;

namespace Address.Address
{
    public interface ICountrySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CountrySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICountrySaveHandler
    {
        public CountrySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}