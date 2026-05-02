
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<Entities.CategoriesTypeRow>;
    using MyRow = Entities.CategoriesTypeRow;

    public interface ICategoriesTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class CategoriesTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeListHandler
    {
        public CategoriesTypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
