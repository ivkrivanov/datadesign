using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.StateProvinceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.StateProvinceRow;

namespace Company.Company;

public interface IStateProvinceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class StateProvinceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IStateProvinceSaveHandler
{
    public StateProvinceSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}