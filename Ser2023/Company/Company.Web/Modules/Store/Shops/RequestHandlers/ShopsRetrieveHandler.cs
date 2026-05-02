
using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.ShopsRow>;
using MyRow = Company.Store.ShopsRow;

namespace Company.Store;
public interface IShopsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ShopsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IShopsRetrieveHandler
{
    public ShopsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}
