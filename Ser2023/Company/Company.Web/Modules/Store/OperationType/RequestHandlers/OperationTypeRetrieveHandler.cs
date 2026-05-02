
namespace Company.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<OperationTypeRow>;
    using MyRow = OperationTypeRow;

    public interface IOperationTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class OperationTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeRetrieveHandler
    {
        public OperationTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}