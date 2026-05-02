using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Administration.TenantsRow>;
using MyRow = Company.Administration.TenantsRow;

namespace Company.Administration;

public interface ITenantsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsRetrieveHandler
{
    public TenantsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}