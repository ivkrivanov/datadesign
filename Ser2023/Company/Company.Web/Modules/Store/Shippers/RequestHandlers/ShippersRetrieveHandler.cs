using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.ShippersRow>;
using MyRow = Company.Store.ShippersRow;

namespace Company.Store;

public interface IShippersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ShippersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersRetrieveHandler
{
    public ShippersRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}