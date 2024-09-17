
namespace Store.Store
{
    using Serenity.Demo.Northwind;
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.CategoriesTypeRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.CategoriesTypeRow;

    public interface ICategoriesTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class CategoriesTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeSaveHandler
    {
        public CategoriesTypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
