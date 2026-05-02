namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.CategoriesTypeRow>;
    using MyRow = Entities.CategoriesTypeRow;

    public interface ICategoriesTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class CategoriesTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeRetrieveHandler
    {
        public CategoriesTypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
