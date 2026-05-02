using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.BusinessEntityAddressRow;

namespace Company.Company;

public interface IBusinessEntityAddressDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityAddressDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityAddressDeleteHandler
{
    public BusinessEntityAddressDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}