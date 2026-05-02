
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.ShopsRow;

    public interface IShopsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ShopsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IShopsDeleteHandler
    {
        public ShopsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}