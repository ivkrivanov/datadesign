using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.BusinessEntityRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntitySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntitySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntitySaveHandler
{
    public BusinessEntitySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}