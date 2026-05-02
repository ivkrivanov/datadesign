
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.ShippersRow>;
    using MyRow = Entities.ShippersRow;

    public interface IShippersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IShippersListHandler
    {
        public ShippersListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}