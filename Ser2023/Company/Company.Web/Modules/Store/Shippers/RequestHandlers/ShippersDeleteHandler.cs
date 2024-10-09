using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.ShippersRow;

namespace Company.Store;

public interface IShippersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class ShippersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IShippersDeleteHandler
{
    public ShippersDeleteHandler(IRequestContext context)
         : base(context)
    {
    }
}