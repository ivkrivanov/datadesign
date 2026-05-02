
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.CategoriesRow>;
    using MyRow = Entities.CategoriesRow;

    public interface ICategoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class CategoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesListHandler
    {
        public CategoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
