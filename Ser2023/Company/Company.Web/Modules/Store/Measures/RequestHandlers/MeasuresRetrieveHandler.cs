using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Store.MeasuresRow>;
using MyRow = Company.Store.MeasuresRow;

namespace Company.Store;

public interface IMeasuresRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class MeasuresRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresRetrieveHandler
{
    public MeasuresRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
}