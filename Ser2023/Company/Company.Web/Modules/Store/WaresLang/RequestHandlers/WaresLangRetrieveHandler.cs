using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.WaresLangRow>;
using MyRow = Company.Store.WaresLangRow;

namespace Company.Store;
public interface IWaresLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class WaresLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangRetrieveHandler
{
    public WaresLangRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}