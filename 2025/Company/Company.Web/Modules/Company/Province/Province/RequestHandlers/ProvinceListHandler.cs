using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.ProvinceRow>;
using MyRow = Company.Company.ProvinceRow;

namespace Company.Company;

public interface IProvinceListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ProvinceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProvinceListHandler
{
    public ProvinceListHandler(IRequestContext context)
            : base(context)
    {
    }
}