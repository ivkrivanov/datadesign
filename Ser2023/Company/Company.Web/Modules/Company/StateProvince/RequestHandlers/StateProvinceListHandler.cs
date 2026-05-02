using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.StateProvinceRow>;
using MyRow = Company.Company.StateProvinceRow;

namespace Company.Company;

public interface IStateProvinceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class StateProvinceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceListHandler
{
    public StateProvinceListHandler(IRequestContext context)
            : base(context)
    {
    }
}