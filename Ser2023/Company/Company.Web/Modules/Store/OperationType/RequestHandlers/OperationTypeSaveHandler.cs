using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.OperationTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.OperationTypeRow;

namespace Company.Store;
public interface IOperationTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class OperationTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeSaveHandler
{
    public OperationTypeSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
