using MyRequest = Serenity.Services.SaveRequest<Company.Company.ProvinceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.ProvinceRow;

namespace Company.Company;

public interface IProvinceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ProvinceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProvinceSaveHandler
{
    public ProvinceSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}