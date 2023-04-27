using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.StateProvinceRow>;
using MyRow = Company.Company.StateProvinceRow;

namespace Company.Company;

public interface IStateProvinceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class StateProvinceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceRetrieveHandler
{
    public StateProvinceRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}