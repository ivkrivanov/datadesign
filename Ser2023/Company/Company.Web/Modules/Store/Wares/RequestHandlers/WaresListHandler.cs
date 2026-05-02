using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.WaresRow>;
using MyRow = Company.Store.WaresRow;

namespace Company.Store;
public interface IWaresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class WaresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresListHandler
{
    public WaresListHandler(IRequestContext context)
         : base(context)
    {
    }
}