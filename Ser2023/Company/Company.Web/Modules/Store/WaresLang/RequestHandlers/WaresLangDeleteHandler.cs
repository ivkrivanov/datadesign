using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.WaresLangRow;

namespace Company.Store;
public interface IWaresLangDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class WaresLangDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangDeleteHandler
{
    public WaresLangDeleteHandler(IRequestContext context)
         : base(context)
    {
    }
}