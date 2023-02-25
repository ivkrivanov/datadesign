
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.WaresLangRow>;
    using MyRow = Entities.WaresLangRow;

    public interface IWaresLangListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class WaresLangListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresLangListHandler
    {
        public WaresLangListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}