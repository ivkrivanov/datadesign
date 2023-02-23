
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.OperationTypeRow>;
    using MyRow = Entities.OperationTypeRow;

    public interface IOperationTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class OperationTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeRetrieveHandler
    {
        public OperationTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}