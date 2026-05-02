
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.MeasuresRow;

    public interface IMeasuresDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeasuresDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresDeleteHandler
    {
        public MeasuresDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}