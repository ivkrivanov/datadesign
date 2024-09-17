
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.MeasuresRow>;
    using MyRow = Entities.MeasuresRow;

    public interface IMeasuresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeasuresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresListHandler
    {
        public MeasuresListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}