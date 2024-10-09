using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.WaresRow>;
using MyRow = Company.Store.WaresRow;

namespace Company.Store;
public interface IWaresRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresRetrieveHandler
{
    public WaresRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}