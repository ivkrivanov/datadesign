using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.BusinessEntityRow>;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntityRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityRetrieveHandler
{
    public BusinessEntityRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}