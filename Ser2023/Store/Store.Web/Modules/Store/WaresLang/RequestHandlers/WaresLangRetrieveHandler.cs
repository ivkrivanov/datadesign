
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.WaresLangRow>;
    using MyRow = Entities.WaresLangRow;

    public interface IWaresLangRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresLangRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangRetrieveHandler
    {
        public WaresLangRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}