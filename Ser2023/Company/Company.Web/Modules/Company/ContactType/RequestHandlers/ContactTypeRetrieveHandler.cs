using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Company.Company.ContactTypeRow>;
using MyRow = Company.Company.ContactTypeRow;

namespace Company.Company;

public interface IContactTypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class ContactTypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IContactTypeRetrieveHandler
{
    public ContactTypeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}