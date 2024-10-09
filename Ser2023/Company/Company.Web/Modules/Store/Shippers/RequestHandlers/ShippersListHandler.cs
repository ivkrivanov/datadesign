using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.ShippersRow>;
using MyRow = Company.Store.ShippersRow;

namespace Company.Store;

public interface IShippersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ShippersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IShippersListHandler
{
    public ShippersListHandler(IRequestContext context)
         : base(context)
    {
    }
}