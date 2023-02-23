
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Entities.ShippersRow;

    public interface IShippersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IShippersDeleteHandler
    {
        public ShippersDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}