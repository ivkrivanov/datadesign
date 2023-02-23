namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<Entities.CategoriesRow>;
    using MyRow = Entities.CategoriesRow;

    public interface ICategoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class CategoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesRetrieveHandler
    {
        public CategoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
