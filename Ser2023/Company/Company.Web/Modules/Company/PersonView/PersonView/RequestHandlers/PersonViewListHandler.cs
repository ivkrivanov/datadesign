using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.PersonViewRow>;
using MyRow = Company.Company.PersonViewRow;

namespace Company.Company;

public interface IPersonViewListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class PersonViewListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonViewListHandler
{
    public PersonViewListHandler(IRequestContext context)
            : base(context)
    {
    }
}