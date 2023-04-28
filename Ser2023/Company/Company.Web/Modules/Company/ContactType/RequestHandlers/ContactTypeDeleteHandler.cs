using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.ContactTypeRow;

namespace Company.Company;

public interface IContactTypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class ContactTypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IContactTypeDeleteHandler
{
    public ContactTypeDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}