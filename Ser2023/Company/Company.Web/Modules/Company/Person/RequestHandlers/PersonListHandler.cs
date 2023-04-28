using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.PersonRow>;
using MyRow = Company.Company.PersonRow;

namespace Company.Company;

public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
{
    public PersonListHandler(IRequestContext context)
            : base(context)
    {
    }
}