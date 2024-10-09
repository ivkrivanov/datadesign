using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.ShopsRow>;
using MyRow = Company.Store.ShopsRow;

namespace Company.Store;
public interface IShopsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ShopsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IShopsListHandler
{
    public ShopsListHandler(IRequestContext context)
            : base(context)
    {
    }
}
