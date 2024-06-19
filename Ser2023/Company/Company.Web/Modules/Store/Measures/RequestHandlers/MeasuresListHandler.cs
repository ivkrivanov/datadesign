using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.MeasuresRow>;
using MyRow = Company.Store.MeasuresRow;

namespace Company.Store;

public interface IMeasuresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class MeasuresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresListHandler
{
    public MeasuresListHandler(IRequestContext context)
         : base(context)
    {
    }
}