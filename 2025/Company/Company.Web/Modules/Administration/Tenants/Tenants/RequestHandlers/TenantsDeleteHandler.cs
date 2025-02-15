using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Administration.TenantsRow;

namespace Company.Administration;

public interface ITenantsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class TenantsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITenantsDeleteHandler
{
    public TenantsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}