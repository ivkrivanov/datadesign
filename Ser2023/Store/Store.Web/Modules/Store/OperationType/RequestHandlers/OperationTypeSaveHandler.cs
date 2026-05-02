
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.OperationTypeRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.OperationTypeRow;
    public interface IOperationTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class OperationTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeSaveHandler
    {
        public OperationTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}