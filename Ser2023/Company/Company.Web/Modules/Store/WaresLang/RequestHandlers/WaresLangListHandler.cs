using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.WaresLangRow>;
using MyRow = Company.Store.WaresLangRow;

namespace Company.Store;

public interface IWaresLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class WaresLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangListHandler
{
    public WaresLangListHandler(IRequestContext context)
         : base(context)
    {
    }
}