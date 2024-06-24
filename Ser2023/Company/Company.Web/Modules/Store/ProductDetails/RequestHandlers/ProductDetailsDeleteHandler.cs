using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.ProductDetailsRow;

namespace Company.Store;

public interface IProductDetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ProductDetailsDeleteHandler :
    DeleteRequestHandler<MyRow, MyRequest,MyResponse>, IProductDetailsDeleteHandler
{
    public ProductDetailsDeleteHandler(IRequestContext context) : base(context)
    {
    }
}