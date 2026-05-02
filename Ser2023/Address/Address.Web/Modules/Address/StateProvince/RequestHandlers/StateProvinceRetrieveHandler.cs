using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Address.Address.StateProvinceRow>;
using MyRow = Address.Address.StateProvinceRow;

namespace Address.Address
{
    public interface IStateProvinceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class StateProvinceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceRetrieveHandler
    {
        public StateProvinceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}