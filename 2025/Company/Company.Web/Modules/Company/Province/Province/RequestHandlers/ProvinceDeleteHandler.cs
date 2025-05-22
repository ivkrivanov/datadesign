using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.ProvinceRow;

namespace Company.Company;

public interface IProvinceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ProvinceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IProvinceDeleteHandler
{
    public ProvinceDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}