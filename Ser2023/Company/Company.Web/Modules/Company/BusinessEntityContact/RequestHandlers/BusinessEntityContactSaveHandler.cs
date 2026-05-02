using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.BusinessEntityContactRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.BusinessEntityContactRow;

namespace Company.Company;

public interface IBusinessEntityContactSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityContactSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityContactSaveHandler
{
    public BusinessEntityContactSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}