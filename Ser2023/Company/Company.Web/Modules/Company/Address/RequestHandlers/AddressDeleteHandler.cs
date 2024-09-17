using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Company.AddressRow;

namespace Company.Company;

public interface IAddressDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class AddressDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAddressDeleteHandler
{
    public AddressDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}