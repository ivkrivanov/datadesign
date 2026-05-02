using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.WaresRow;

namespace Company.Store;
public interface IWaresDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class WaresDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IWaresDeleteHandler
{
    public WaresDeleteHandler(IRequestContext context)
         : base(context)
    {
    }
}