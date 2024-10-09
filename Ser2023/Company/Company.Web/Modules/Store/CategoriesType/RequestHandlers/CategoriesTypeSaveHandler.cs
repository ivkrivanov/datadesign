using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.CategoriesTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.CategoriesTypeRow;

namespace Company.Store;

public interface ICategoriesTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class CategoriesTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesTypeSaveHandler
{
    public CategoriesTypeSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}
