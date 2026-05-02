using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.BusinessEntityContactRow>;
using MyRow = Company.Company.BusinessEntityContactRow;

namespace Company.Company;

public interface IBusinessEntityContactRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityContactRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityContactRetrieveHandler
{
    public BusinessEntityContactRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}