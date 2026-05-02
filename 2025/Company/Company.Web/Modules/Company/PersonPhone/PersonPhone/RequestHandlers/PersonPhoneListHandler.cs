using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.PersonPhoneRow>;
using MyRow = Company.Company.PersonPhoneRow;

namespace Company.Company;

public interface IPersonPhoneListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class PersonPhoneListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonPhoneListHandler
{
    public PersonPhoneListHandler(IRequestContext context)
            : base(context)
    {
    }
}