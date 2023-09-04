using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Address.StateProvinceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Address.StateProvinceRow;

namespace Address.Address
{
    public interface IStateProvinceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class StateProvinceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceSaveHandler
    {
        public StateProvinceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}