
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.MeasuresRow>;
    using MyRow = Entities.MeasuresRow;

    public interface IMeasuresRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeasuresRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresRetrieveHandler
    {
        public MeasuresRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}