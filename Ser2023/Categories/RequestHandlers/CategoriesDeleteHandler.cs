namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.DeleteRequest;
    using MyResponse = Serenity.Services.DeleteResponse;
    using MyRow = Store.Entities.CategoriesRow;

    public interface ICategoriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

    public class CategoriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesDeleteHandler
    {
        public CategoriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}