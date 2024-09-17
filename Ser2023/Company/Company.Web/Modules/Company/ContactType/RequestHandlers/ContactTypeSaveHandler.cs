using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Company.ContactTypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Company.ContactTypeRow;

namespace Company.Company;

public interface IContactTypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class ContactTypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IContactTypeSaveHandler
{
    public ContactTypeSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}