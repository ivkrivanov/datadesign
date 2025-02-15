using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Default.TenantsRow>;
using MyRow = Company.Default.TenantsRow;

namespace Company.Default;

public interface ITenantsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsRetrieveHandler
{
    public TenantsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}