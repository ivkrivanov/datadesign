using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.WaresOrderDetailRow;

namespace Company.Store;

public interface IWaresOrderDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class WaresOrderDetailsDeleteHandler :
    DeleteRequestHandler<MyRow, MyRequest,MyResponse>, IWaresOrderDetailDeleteHandler
{
    public WaresOrderDetailsDeleteHandler(IRequestContext context) : base(context)
    {
    }
}