using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.PersonPhoneRow>;
using MyRow = Company.Company.PersonPhoneRow;

namespace Company.Company;

public interface IPersonPhoneRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonPhoneRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonPhoneRetrieveHandler
{
    public PersonPhoneRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}