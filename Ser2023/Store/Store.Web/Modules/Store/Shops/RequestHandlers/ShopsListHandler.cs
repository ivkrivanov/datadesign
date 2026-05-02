
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.ShopsRow>;
    using MyRow = Entities.ShopsRow;

    public interface IShopsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ShopsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IShopsListHandler
    {
        public ShopsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}