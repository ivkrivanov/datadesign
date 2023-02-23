
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.OperationTypeRow>;
    using MyRow = Entities.OperationTypeRow;

    public interface IOperationTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class OperationTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOperationTypeListHandler
    {
        public OperationTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}