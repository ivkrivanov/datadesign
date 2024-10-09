using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.WaresOrderRow;
using Serenity.Services;

namespace Company.Store;

public interface IWaresOrderDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class WaresOrderDeleteHandler :
    DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderDeleteHandler
{
    public WaresOrderDeleteHandler(IRequestContext context) : base(context)
    {
    }
}