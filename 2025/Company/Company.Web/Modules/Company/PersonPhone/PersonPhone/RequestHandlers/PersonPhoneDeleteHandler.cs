using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.PersonPhoneRow;

namespace Company.Company;

public interface IPersonPhoneDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class PersonPhoneDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonPhoneDeleteHandler
{
    public PersonPhoneDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}