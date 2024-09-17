using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntityDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityDeleteHandler
{
    public BusinessEntityDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}