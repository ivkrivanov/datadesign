
namespace Store.Store
{
    using Serenity.Demo.Northwind;
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.CategoriesRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.CategoriesRow;

    public interface ICategoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class CategoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesSaveHandler
    {
        public CategoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
