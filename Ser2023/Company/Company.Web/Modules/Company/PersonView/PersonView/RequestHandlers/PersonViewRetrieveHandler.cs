using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.PersonViewRow>;
using MyRow = Company.Company.PersonViewRow;

namespace Company.Company;

public interface IPersonViewRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonViewRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonViewRetrieveHandler
{
    public PersonViewRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}