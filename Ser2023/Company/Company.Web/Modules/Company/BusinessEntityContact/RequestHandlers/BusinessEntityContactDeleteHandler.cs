using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.BusinessEntityContactRow;

namespace Company.Company;

public interface IBusinessEntityContactDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityContactDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityContactDeleteHandler
{
    public BusinessEntityContactDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}