
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.WaresRow>;
    using MyRow = Entities.WaresRow;

    public interface IWaresListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresListHandler
    {
        public WaresListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}