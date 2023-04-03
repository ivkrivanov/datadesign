using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Address.Address.StateProvinceRow;

namespace Address.Address
{
    public interface IStateProvinceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class StateProvinceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceDeleteHandler
    {
        public StateProvinceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}