using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.PersonViewRow;

namespace Company.Company;

public interface IPersonViewDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class PersonViewDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonViewDeleteHandler
{
    public PersonViewDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}