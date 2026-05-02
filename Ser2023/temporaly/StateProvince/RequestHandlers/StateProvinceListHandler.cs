using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Address.Address.StateProvinceRow>;
using MyRow = Address.Address.StateProvinceRow;

namespace Address.Address
{
    public interface IStateProvinceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class StateProvinceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceListHandler
    {
        public StateProvinceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}