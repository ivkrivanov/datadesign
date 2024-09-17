
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.OperationTypeRow;

    public interface IOperationTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class OperationTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeDeleteHandler
    {
        public OperationTypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}