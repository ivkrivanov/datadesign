using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.ContactTypeRow>;
using MyRow = Company.Company.ContactTypeRow;

namespace Company.Company;

public interface IContactTypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ContactTypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IContactTypeListHandler
{
    public ContactTypeListHandler(IRequestContext context)
            : base(context)
    {
    }
}