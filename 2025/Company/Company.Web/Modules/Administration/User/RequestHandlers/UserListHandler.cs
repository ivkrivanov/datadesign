using MyRequest = Company.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Administration.UserRow>;
using MyRow = Company.Administration.UserRow;

namespace Company.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}