using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.ProvinceRow>;
using MyRow = Company.Company.ProvinceRow;

namespace Company.Company;

public interface IProvinceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ProvinceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProvinceRetrieveHandler
{
    public ProvinceRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}